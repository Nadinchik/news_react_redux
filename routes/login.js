let express = require('express');
let router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

let model = require('../models/User_model');
const User = require('mongoose').model('users');

passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passportField: 'password'
  },
  function (username, password, done) {
    console.log('usernameRouter', username);
    User.findOne({username}, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {message: 'Incorrect username.'})
      }
      if (!user.password === password) {
        return done(null, false, {message: 'Incorrect password.'})
      }
      console.log('userLogin -->', user);
      return done(null, user)
    });
  },
));

router.post('/',
  passport.authenticate('local', { failureRedirect: '/' }),
  function (req, res) {
    res.send({ user: req.user });
  });

router.get('/user', function (req, res, next) {
  res.send({ user: req.user });
});

// router.post('/', function(req, res, next) {
//   passport.authenticate('local', function(err, user) {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.redirect('/');
//     });
//   })(req, res, next);
// });

module.exports = router;
