module.exports = function(mongoose) {
  return new mongoose.Schema({
    email: String,
    password: String,
    c_date: {type: Date, default: Date.now}
  })
}