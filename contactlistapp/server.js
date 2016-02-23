var express = require("express");
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');

/*app.get('/',function(req,res){
	res.send("hi");
});*/
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());


app.get('/contactlist',function(req,res)
{
   console.log("receive a get req");
   db.contactlist.find(function(err,results){
   		console.log(results);
   		res.json(results);
   });
app.post('/contactlist',function(req,res){
   	console.log(req.body);
   	db.contactlist.insert(req.body,function(err,result){
   		res.json(result);
   	})
});
   /* person1={
        	name:'Ashok',
        	email:'abc@gmail.com',
        	number:'1234567890'
        };   
        person2={
        	name:'Ashok2',
        	email:'abc2@gmail.com',
        	number:'1234567890'
        };
        person3={
        	name:'Ashok3',
        	email:'abc3@gmail.com',
        	number:'1234567890'
        };

        var contactlist=[person1,person2,person3];
        res.json(contactlist);*/
});
app.listen(3000);
console.log("server running on port 3000");



