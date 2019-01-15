let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/User_model');

module.exports = function(passport){
  passport.use('signUp', new LocalStrategy({
    passReqToCallback : true
    },
    function (req, firstName, lastName, username, password, done) {
      findOrCreateUser = function(){
        User.findOne({username}, function (err, user) {
          if(err){
            console.log('err -->', err);
            return done(err);
          }
          if(user){
            console.log('User exist');
            return done(null, false, req.flash('message', "User already exist"));
          }else{
            let newUser = new User();
            newUser.firstName = req.param.firstName;
            newUser.lastName = req.param.lastName;
            newUser.username = username;
            newUser.password = password;

            newUser.save(function(err){
              if(err){
                console.log('err -->', err);
                throw err;
              }
              console.log('User sign up successful');
              return done(err, newUser)
            });
          }
        })
    };
  process.nextTick(findOrCreateUser);
  })
)};
