require('dotenv').config();
const { PORT, MONGO_URI, MONGO_DB} = process.env;

const express = require('express');
const mongoose = require("mongoose");
const {graphqlHTTP} = require('express-graphql');
const { schema, root} = require('./graphql/schema')

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));


mongoose
  .connect(`${MONGO_URI}/${MONGO_DB}`, {useNewURLParser: true})
  .then(() => console.log('successfully connected to mongodb'))
  .catch((e) => console.error(e))

app.listen(PORT, () => console.log('Now browse to localhost:4000/graphql'))