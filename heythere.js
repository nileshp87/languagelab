// In this example we are working on processing a form and passing
// what we processed into a page.

var express = require('express');
var app = express();

// This is new, these two lines let us parse form data in requests:
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

var count = 0;

// We set the name in this scope, and leave it as undefined by default.
var name = undefined;

app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/count', function(req, res) {
  res.render('count', {'times': count});
  count++;
});

// The get endpoint that we make for the heythere endpoint
// access this at http://localhost:8080/heythere
app.get('/heythere', function(req, res){
  // Respond with the rendered template, passing it the name to display.
  res.render('heythere', {'name': name});
});

app.post('/heythere', function(req, res){
  // From the body of the request get the name parameter and update
  // our name variable to it.
  name = req.body.name;
  // Respond with the name template rendered. You can also use heythere again.
  res.render('name', {'name': name});
});

app.listen(8080);
