const cookieParser = require('cookie-parser');
var express = require('express');
var app = express();



// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(cookieParser());
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/logs', function(req, res) {
  res.render('pages/logs');
});

app.listen(8080);
console.log('Server is listening on port 8080');