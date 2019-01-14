let LocalStrategy = require('passport-local').Strategy;
let User = require('./models/User_model');

module.exports = function(passport) {
  passport.use('login', new LocalStrategy(
    function (identifier, password, done) {
      User.findOne({identifier}, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {message: 'Incorrect username.'});
        }
        if (!user.password === password) {
          return done(null, false, {message: 'Incorrect password.'});
        }
        return done(null, user);
      });
    }
  ));
};
