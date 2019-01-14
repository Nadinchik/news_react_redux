let express = require('express');
let flash = require('connect-flash');
let router = express.Router();

module.exports = function (passport) {

  router.get('/signIn', function (req, res) {
    res.render('register', {message: req.flash('message')});
  });

  router.post('/signIn', passport.authenticate('signIn', {
    successRedirect: '/user',
    failureRedirect: '/signIn',
    failureFlash : true
  }));

  return router;
};