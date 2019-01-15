let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require("body-parser");
let logger = require('morgan');

let db = require('./db/db');
let User = require('./models/User_model');
let passport = require('passport');
let indexRouter = require('./routes/index');
let signUpRouter = require('./routes/signup');
let expressSession = require('express-session');
let LocalStrategy = require('passport-local').Strategy;

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

//login strategy

passport.use('signUp', new LocalStrategy(
  {
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, username, password, done) {
    User.findOne({username}, function (err, user) {
      if (err)
        return done(err);

      if (user) {
        return done(null, false, 'That email is already taken.');
      } else {
        let newUser = new User();

        newUser.username = username;
        newUser.password = password;

        newUser.save(function (err) {
          if (err)
            throw err;
          return done(null, newUser);
        });
      }
    })
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use('/', indexRouter);
app.use('/signUp', signUpRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
