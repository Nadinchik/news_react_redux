// let express = require('express');
// let router = express.Router();
// let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const passport = require('passport');
//
// let model = require('../models/User_model');
// const User = require('mongoose').model('users');
//
// passport.use(new GoogleStrategy({
//         clientID: '932534981003-thcpid6t7bcarjhhbadhh2ctf0tqu93b.apps.googleusercontent.com',
//         clientSecret: 'xr7XPXJOHqbPrUUYVvB8MzjP',
//         callbackURL: 'http://localhost:3000/google/callback'
//     },
//     function (profile, done) {
//         console.log(profile);
//
//         const {id, name} = profile;
//         User.findOne({googleId: id}, (err, user) => {
//             if (err) {
//                 console.log('Error!! trying to find user with googleId');
//                 console.log(err);
//                 return done(null, false);
//             }
//
//             if (user) {
//                 return done(null, user)
//             } else {
//                 console.log(id);
//                 console.log(profile);
//                 const newGoogleUser = new User({
//                     googleId: id,
//                     username: name.username,
//                     fullName: name.fullName,
//                 });
//
//                 newGoogleUser.save((err, savedUser) => {
//                     if (err) {
//                         console.log('Error!! saving the new google user');
//                         console.log(err);
//                         return done(null, false);
//                     } else {
//                         return done(null, savedUser);
//                     }
//                 })
//             }
//         })
//     }
// ));
//
// router.get('/google',
//     passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
//
// router.get(
//     '/google/callback',
//     passport.authenticate('google', {failureRedirect: '/'})
//
// module.exports = router;