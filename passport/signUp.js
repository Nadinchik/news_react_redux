let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/User_model');

module.exports = function(passport){
  passport.use('signUp', new LocalStrategy({
      passReqToCallback : true
    },
    function(req, username, password, done) {
      User.findOne({username}, function (err, user) {
        if (err)
          return done(err);

        if (user) {
          return done(null, false, 'That email is already taken.');
        } else {
          let newUser = new User();

          newUser.username = username;
          newUser.password = password;

          newUser.save(function (err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      })
    })
  )
};
