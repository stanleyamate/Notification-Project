const cookieParser = require('cookie-parser');
var express = require('express');
var app = express();



// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(cookieParser());
// use res.render to load up an ejs view file

// index route
app.get('/', function(req, res) {
  res.render('pages/index');
});

// logs route
app.get('/logs', function(req, res) {
  res.render('pages/logs');
});

// task route
app.get('/task', function(req, res) {
  res.render('pages/task');
});

app.listen(8080);
console.log('Server is listening on port 8080');
