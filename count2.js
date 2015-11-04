// This example shows how to pass variables to jade for more
// powerful rendering abilities.

var express = require('express');
var app = express();

var count = 0;
// This line comes back in this example
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/count', function(req, res) {
  // This is the way to pass a variable into a jade template.
  res.render('count', {'times': count});
  count++;
});

app.listen(8080);
