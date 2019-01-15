let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/User_model');

module.exports = function(passport){
  passport.use('signUp', new LocalStrategy({
      passReqToCallback: true,
      usernameField: 'username',
      passwordField: 'password',
    },
    function (req, username, password, done) {
      User.findOne({ username }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          let user = new User({
            username: req.body.username,
            fullName: req.body.fullName,
            password: req.body.password,
          });
          user.save(function (err) {
            if (err) return next(err);
          });
          return done(null, user);
        } else {
          return done({ status: 409 }, false);
        }
      });
    }));
};



