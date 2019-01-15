let express = require('express');
let router = express.Router();
let passport = require('passport');


router.post('/signUp', passport.authenticate('signUp'), (req, res) => {
  res.send(req.user);
});

module.exports = router;
