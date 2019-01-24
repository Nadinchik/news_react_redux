let express = require('express');
let router = express.Router();
const passport = require('passport');
const userMiddleware = require('../middleware/user');

passport.userMiddleware = userMiddleware;

router.get('/',
    passport.userMiddleware,
    function (req, res, next) {
        res.send({user: req.user});
    });

module.exports=router;