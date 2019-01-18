let express = require('express');
let router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
let encryptPassword = require('../utils/encryptPassword');

let model = require('../models/User_model');
const User = require('mongoose').model('users');

passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passportField: 'password'
  },
  function (username, password, done) {
    console.log('-->username', username);
    console.log('-->password', password);
    User.findOne({username}, function (err, user) {
      console.log('-->err', err);

      if (err) {
        return done(err);
      }
      console.log('-->user', user);
      if (!user) {
        return done(null, false, {message: 'Incorrect username.'})
      }
      console.log('-->user.hashedPassword', user.hashedPassword);
      console.log('-->user.salt', user.salt);
      console.log('-->encryptPassword(password, user.salt)', encryptPassword(password, user.salt));
      console.log('-->isEqual passwords', user.hashedPassword !== encryptPassword(password, user.salt));
      if (user.hashedPassword !== encryptPassword(password, user.salt)) {
        return done(null, false, {message: 'Incorrect password.'})
      }
      return done(null, user);
    });
  },
));

// router.post('/',
//   passport.authenticate('local', {failureRedirect: '/'}),
//   function (req, res) {
//     res.send({user: req.user});
//   });

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }

    console.log('Post--- user -->', user);

    if (!user) { return res.redirect('/login'); }

    req.logIn(user, function(err) {

      console.log('Post--- user.username-->',  user.username);

      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});


// router.post('/', (req, res, next) => {
//   if (!req.body.username) {
//     return res.status(422).json({
//       errors: {
//         username: 'is required',
//       }
//     })
//   }
//   if(!req.body.password) {
//     return res.status(422).json({
//       errors: {
//         password: 'is required',
//       },
//     });
//   }
//
// });
//
// return passport.authenticate('local', {failureRedirect:'/'},
//   function (req, res) {
//     console.log('req.user -->', req.user);
//     res.send({user: req.user});
//   });

// router.post('/', function (req, res, next) {
//   passport.authenticate('local', function (err, user) {
//     if (!req.body.username) {
//       return res.status(422).json({
//         errors: {
//           username: 'is required',
//         },
//       });
//     }
//     if (!req.body.hashedPassword) {
//       return res.status(422).json({
//         errors: {
//           password: 'is required',
//         },
//       });
//     }
//     req.logIn(user, function (err) {
//       if (err) {
//         return next(err);
//       }
//       return res.redirect('/user/' + user.username);
//     });
//   })(req, res, next);
// });

router.get('/user', function (req, res, next) {
  res.send({user: req.user});
});

module.exports = router;
