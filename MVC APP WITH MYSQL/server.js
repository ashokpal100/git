var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mysql  = require('mysql');

// // parse application/json 
 app.use(bodyParser.json()); 
//app.use(express.logger('dev'));
// // parse application/vnd.api+json as json
 app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: true })); 

// // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
 app.use(methodOverride('X-HTTP-Method-Override')); 

// // set the static files location /public/img will be /img for users
 app.use(express.static(__dirname + '/public')); 

 require('./config/db')(mysql); 

 require('./app/routes')(app); // configure our routes

 app.listen(9000);
 console.log("running server 9000");