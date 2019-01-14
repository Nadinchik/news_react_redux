let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  identifier: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

let User = mongoose.model('User', UserSchema);

module.exports = User;