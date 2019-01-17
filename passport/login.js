// let passport = require('passport');
// let LocalStrategy = require('passport-local').Strategy;
// let User = require('../models/User_model');
//
// module.exports = function() {
//   passport.use('login', new LocalStrategy(
//     function (username, password, done) {
//       User.findOne({username}, function (err, user) {
//         if (err) {
//           return done(err);
//         }
//         if (!user) {
//           return done(null, false, {message: 'Incorrect username.'});
//         }
//         if (!user.password === password) {
//           return done(null, false, {message: 'Incorrect password.'});
//         }
//         return done(null, user);
//       });
//     }
//   ));
// };
