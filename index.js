var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

var redis = require('redis');
var client = redis.createClient();

app.set('view engine', 'jade');

var posts = [];

app.get('/post', function(req, res){
	res.render('post');
});

app.post('/post', function(req, res){
	client.rpush('posts',JSON.stringify({'title': req.body.title, 'content': req.body.content}));
	res.render('success');
});

app.get('/posts/:id', function(req, res){
	client.lindex('posts', req.params.id, function(errors, post){
		if(post){
			res.render('viewpost',{'post': JSON.parse(post)});
		}else{
			res.send("Post doesn't exist");
		}
	});
});

app.get('/posts', function(req, res){
	client.lrange('posts',-10, -1, function(errors, posts){
		res.render('posts', {'posts': posts.reverse()});
	});
});

console.log('Now listening on port 8080...');
app.listen(8080);
