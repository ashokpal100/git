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
   	});
});
app.delete('/contactlist/:c_id',function(req,res){
  var id=req.params.c_id
	console.log(id);
	db.contactlist.remove({_id : mongojs.ObjectId(id)},function(err,doc){
    if(err)
      res.send(err);
		res.json(doc);
	});
});
app.get('/contactlist/:id',function(req,res){
  var id=req.params.id;
  console.log(id);
  db.contactlist.findOne({_id : mongojs.ObjectId(id)},function(err,doc1){
    if (err) 
      res.send(err);
   res.json(doc1);
  });
});
app.put('/contactlist/:id',function(req,res){
  var id=req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
    update: {$set : {name: req.body.name,email:req.body.email, number : req.body.number}},
    new: true},function(err,doc){
      res.json(doc);
    });
});

});
app.listen(3000);
console.log("server running on port 3000");



