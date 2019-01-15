let login = require('./login');
let signIn = require('./signUp');
let User = require('../models/User_model');

module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    console.log('Serializing user: ');
    console.log(user);
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      console.log('Deserializing user:', user);
      done(err, user);
    });
  });

  login(passport);
  signIn(passport);
};