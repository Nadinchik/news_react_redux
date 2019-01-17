let express = require('express');
let router = express.Router();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport');
let model = require('../models/User_model');
const User = require('mongoose').model('users');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/google/callback'
  },
  function (token, tokenSecret, profile, done) {
    // testing
    console.log('===== GOOGLE PROFILE =======');
    console.log(profile);
    console.log('======== END ===========');
    // code
    const {id, name} = profile;
    User.findOne({'google.googleId': id}, (err, user) => {
      // handle errors here:
      if (err) {
        console.log('Error!! trying to find user with googleId');
        console.log(err);
        return done(null, false);
      }
      // if there is already someone with that googleId
      if (user) {
        return done(null, user)
      } else {
        // if no user in our db, create a new user with that googleId
        console.log('====== PRE SAVE =======');
        console.log(id);
        console.log(profile);
        console.log('====== post save ....');
        const newGoogleUser = new User({
          'google.googleId': id,
          username: name.username,
          fullName: name.fullName,
        });
        // save this user
        newGoogleUser.save((err, savedUser) => {
          if (err) {
            console.log('Error!! saving the new google user');
            console.log(err);
            return done(null, false);
          } else {
            return done(null, savedUser);
          }
        })
      }
    })
  }
));

router.get('/google', passport.authenticate('google',  { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {failureRedirect: '/'})
);

module.exports = router;