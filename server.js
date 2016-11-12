var express = require("express");
var bodpars = require("body-parser");
var mongoose = require("mongoose");
var Article = require("./models/article.js");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodpars.json());
app.use(bodpars.json({type: 'application/vnd.api+json'}));
app.use(bodpars.urlencoded({extended: true}));
app.use(bodpars.text());

app.use(express.static('./public'));

mongoose.connect('mongodb://localhost/nytreact');
var db = mongoose.connection;

db.on('error', function(err){
	console.log('Mongoose error: ', err);
});

db.once('open', function(){
	console.log('Mongoose connection successful.');
});

app.get('/', function(req, res){

});

app.get('/api', function(req, res){

});

app.post('/api', function(req, res){

});

app.listen(port, function(){
	console.log('app connected.')
});