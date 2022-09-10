module.exports = (function() {
  const mongoose = require('mongoose');

  const db = mongoose.connection;

  db.on('error', console.error);
  db.once('open', function() {
    console.log("Connected to mongod server")
  })

  const schema = {}
  const model = {}

  schema.Todo = require('./schema/todo')(mongoose);
  schema.User = require('./schema/user')(mongoose);

  for(let k in schema) {
    model[k] = mongoose.model(k, schema[k])
  }

  return model;
})();
