var express = require('express');
var app = express();

var count = 0;

app.get('/', function(req, res) {
  res.send((count++).toString());
});

app.listen(8080);
