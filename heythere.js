var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

var count = 0;
var name = undefined;

app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/count', function(req, res) {
  res.render('count', {'times': count});
  count++;
});

app.get('/heythere', function(req, res){
  res.render('heythere', {'name': name});
});

app.post('/heythere', function(req, res){
  name = req.body.name;
  res.render('heythere', {'name': name});
  res.end();
});

app.listen(8080);
