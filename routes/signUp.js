let express = require('express');
let flash = require('connect-flash');
let router = express.Router();

module.exports = function (passport) {

  router.get('/signUp', function (req, res) {
    res.render('register', {message: req.flash('message')});
  });

  router.post('/signUp', passport.authenticate('signUp', {
    successRedirect: '/user',
    failureRedirect: '/signUp',
    failureFlash : true
  }));

  return router;
};