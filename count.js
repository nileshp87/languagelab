// In this we make a very simple 'dynamic' endpoint, that counts
// how many times it has been accessed.

var express = require('express');
var app = express();

// The counter that we are using. Note that it is declared out or the scope
// of the endpoint declaration.
var count = 0;

app.get('/', function(req, res) {
  res.render('index');
});

// Creating the /count get endpoint, we can access this at
// http://localhost:8080/count
app.get('/count', function(req, res) {
  // You can only send strings as responses, so the int must be
  // converted.
  res.send(count.toString());
  // Increment the count, so on the next access it is one greater.
  count++;
});

app.listen(8080);
