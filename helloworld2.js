// In this example we're focusing on how to call into the templating engine.

var express = require('express');
var app = express();

// This tells the app what templating engine we are using. In the labs we will
// be using jade. This line is also boilerplate, like the lines above it is
// basically always needed.
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  // We've created the index.jade file in the views directory.
  // This line tells express to render the index.jade file, and send the result
  // to the response object.
  res.render('index');
});

app.listen(8080);
