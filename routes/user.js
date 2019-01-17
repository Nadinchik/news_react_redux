let express = require('express');
let router = express.Router();

let model = require('../models/User_model');
const User = require('mongoose').model('users');

router.get('/user', (req, res, next) => {
  console.log('===== user!!======');
  console.log(req.user);
  if (req.user) {
    return res.json({ user: req.user })
  } else {
    return res.json({ user: null })
  }
});

module.exports=router;