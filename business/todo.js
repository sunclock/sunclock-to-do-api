module.exports = (function() {
  const model = require('../mongoose/model');

  async function createTodo({title, content, author}){
    const newPost = new model.Todo({title, content, author})
    const result = await newPost.save();
    return result.populate('author').execPopulate();
  }

  async function getAllTodos({email}) {
    return model.Todo.find({email}).populate('author');
  }

  return {
    createTodo,
    getAllTodos
  }
})