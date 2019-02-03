let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let logger = require('morgan');

let db = require('./db/db');
let model = require('./models/User_model');
const User = require('mongoose').model('users');
let passport = require('passport');

let indexRouter = require('./routes/index');
let profileRouter = require('./routes/profile');
let signUpRouter = require('./routes/signUp');
let loginRouter = require('./routes/login');
let googleRouter = require('./routes/google');
let postRouter = require('./routes/post');
let session = require('express-session');
// let MongoDBStore = require('connect-mongodb-session')(session);

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'mySecretKey' }));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/signUp', signUpRouter);
app.use('/login', loginRouter);
app.use('/google', googleRouter);
app.use('/news', postRouter);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

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

