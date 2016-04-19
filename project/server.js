var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mysql  = require('mysql');
var passport = require('passport');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
//require('./app/models/contactController')(passport);
//require('./config/passport')(passport); // pass passport for configuration
 app.use(bodyParser.json()); 
 app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
 app.use(bodyParser.urlencoded({ extended: true })); 
 app.use(methodOverride('X-HTTP-Method-Override')); 
 app.use(express.static(__dirname + '/public')); 
 require('./app/routes')(app);

 app.listen(9000);
 console.log("running server 9000");