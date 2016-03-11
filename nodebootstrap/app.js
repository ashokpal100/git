var express  = require('express');
var app  = express();
var jade = require('jade');

// app.set('trust proxy', function (ip) {
//   if (ip === '127.0.0.1' || ip === '123.123.123.123') return true; // trusted IPs
//   else return false;
// });
app.set('view engine', 'jade')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public')); 
app.get('/', function (req, res) {
  res.render('emailTemplate',{ title : 'Home'});
});
app.get('/email', function (req, res) {
  res.render('confirmEmail',{ title : 'Home'});
});
app.get('/email1', function (req, res) {
  res.render('docSignup',{ title : 'Home'});
});
app.get('/email2', function (req, res) {
  res.render('angularMaterial',{ title : 'Home'});
});

app.listen(9090);
console.log("running server 9090");