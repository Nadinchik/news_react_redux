let crypto = require('crypto');
let mongoose = require('mongoose');
let encryptPassword = require('../utils/encryptPassword.');

let schema = new mongoose.Schema({
  fullName: {
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
  googleId: {
    type: String,
  }

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