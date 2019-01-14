let express = require('express');
let flash = require('connect-flash');
let router = express.Router();

  router.get('/', function (req, res) {
    res.render('index', {message: req.flash('message')});
  });

module.exports = router;

