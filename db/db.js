let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/news');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});


module.exports = db;