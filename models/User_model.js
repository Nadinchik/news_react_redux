// let mongoose = require('mongoose');
//
// let UserSchema = new mongoose.Schema({
//   fullName: String,
//   username: {
//     type: String,
//     unique: true,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
// });
//
// let User = mongoose.model('User', UserSchema);
//
// module.exports = User;
let crypto = require('crypto');
let mongoose = require('mongoose');

let schema = new mongoose.Schema({
  fullName:{
    type: String
  },
  username: {
    type: String,
    unique: true,
    require: true,
  },
  hashedPassword: {
    type: String,
  },
  salt: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

schema.methods.encryptPassword = function (password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schema.virtual('password')
  .set(function (password) {
    this._planPassword = password;
    this.salt = Math.random() + '';
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function () {
    return this._planPassword;
  });

schema.methods.checkPassword = function (password) {
  return this.encryptPassword(password) === this.hashedPassword;
};


exports.MyUserModel = mongoose.model('users', schema);