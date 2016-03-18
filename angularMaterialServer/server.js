var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({extended: true})); 

var mysql = require("mysql");
var http = require("http");
var path = require("path");

/*
  * Configure MySQL parameters.
*/
var connection      =         mysql.createConnection({
        host        :         "localhost",
        user        :         "root",
        password    :         "2016",
        database    :        "mydatabase"
});

connection.connect(function(error){
  if(error)
    {
      console.log("Problem with MySQL"+error);
    }
  else
    {
      console.log("Connected with Database");
    }
});

/*
  * Configure Express Server.
*/
app.use(express.static(__dirname + "/angular"));
/*
  * Define routing of the application.
*/
app.get("/",function(req,res){
    console.log(req.body);    
    res.sendfile("index.html");
});
app.post("/addd",function(req,res){
    console.log(req.body);
    /* TODO: Now just check that your drive function is correct, SQL is correct and whether what arguements passed to SQL callback is correct */
    connection.query('Insert into img(id,pic) VALUES (""+req.body.id+"",""+req.body.pic+"")',function(err, results, fields) {
        //if (err) throw err;
        if (err) {console.log("DB Error"); res.send("add failed");}
        else res.send("add success");
    });
    //res.send("success");
});
/*
  * Start the Express Web Server.
*/
app.listen(3000,function(){
    console.log("It's Started on PORT 3000");
});
