let express = require('express');
let router = express.Router();
let passport = require('passport');

router.post('/',
  passport.authenticate('signUp', { failureRedirect: '/' }),
  function (req, res) {
    res.send({ user: req.user });
  });

module.exports = router;
