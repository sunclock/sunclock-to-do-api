module.exports = (function() {
  const model = require('../mongoose/model');

  async function getUser(email) {
    return model.User.findOne({email: email})
  }

  async function getAllUsers() {
    return model.User.find();
  }

  async function createUser(email, password) {
    if (await getUser(email)) throw "already joined email";

    const newUser = new model.User({email, password})
    const result = await newUser.save();

    return result;
  }

  return {
    getUser,
    getAllUsers,
    createUser
  }
})();
