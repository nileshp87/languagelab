var express = require('express');
var app = express();

var count = 0;
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/count', function(req, res) {
  res.render('count', {'times': count});
  count++;
});

app.listen(8080);
