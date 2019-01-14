let express = require('express');
let flash = require('connect-flash');
let router = express.Router();

module.exports = function (passport) {

  router.post('/login', passport.authenticate('login', {
    successRedirect: '/user',
    failureRedirect: '/',
    failureFlash: true
  }));

  return router;
};
