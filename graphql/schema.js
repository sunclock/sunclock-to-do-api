const dao = require('../business/dao');
const { buildSchema} = require('graphql');

const schema = buildSchema(`
  type Query {
    users: [User]
    user(email: String!): User
    todos: [Todo]
  }

  type Mutation {
    createUser(email: String!, password: String!): User
    createTodo(title: String!, content: String!, author: String!): Todo
  }

  type User {
    id: String
    email: String
    password: String
    c_date: String
  }

  type Todo {
    id: String
    title: String
    content: String
    author: User
    c_date: String
  }
`)

const resolver = {
  users: async (args, context, info) => {
    return dao.user.getAllUsers();
  },
  user: async (args, context, info) => {
    const { email} = args;
    return dao.user.getUser(email);
  },
  createUser: async (args, context, info) => {
    const { email, password} = args;
    return dao.user.createUser(email, password);
  },
  todos: async (args, context, info) => {
    const { email} = args;
    return dao.todo.getAllTodos(email);
  },
  createTodo: async (args, context, info) => {
    return dao.todo.createTodo(args);
  },
};

module.exports = { schema, root: resolver}