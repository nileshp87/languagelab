// This is mostly boilerplate code for express, you'll need this everytime
var express = require('express');
var app = express();

// Express works by creating an app, and then telling that app what endpoints
//  it exposes. In this case we are exposing the '/' endpoint via a get method.
app.get('/', function(req, res) {
  // The res object is short for 'response'. Operating on it will alter what
  //  express sends to the receiver.
  res.send('Hello World');
});

// Once we've setup our app, we can tell it to listen for requests on port 8080
// Navigating to http://localhost:8080 will serve our code.
app.listen(8080);
