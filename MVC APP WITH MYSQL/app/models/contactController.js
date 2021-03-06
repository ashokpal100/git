var mysql  = require('mysql');
// var mysql = require('../db/mysql').pool;
var connection = mysql.createConnection
   ({
     host     : 'localhost',
     user     : 'root',
     password : '2016',
     database : 'mydatabase'
   });

        exports.findAll = function(req, res)
        {
            console.log("receive a get req");
            connection.query('select * from contact',[],function (err, result) 
            {
                  if (err) throw err;
                  res.send(result);
            });

        };
        exports.add = function(req, res)
       {
            var data=req.body;
            console.log(data);
            var contactUser= {name:data.name,email:data.email,number:data.number,gender:data.gender,subj1:data.subj1,subj2:data.subj2,subj3:data.subj3,subj4:data.subj4,year:data.year};
            connection.query('INSERT INTO contact SET ?',contactUser,function (err, result) 
            {
               if (err) throw err;
              res.send(result);
            });
        };
        exports.findById = function(req, res)
        {
            var id=req.params.id;
            console.log(id);
            connection.query('select * from contact Where id = ?',[id],function (err, result) 
            {
                if (err) throw err;
                console.log(result);
                res.send(result[0]);
           });
        };

   		exports.delete = function(req,res)
   		{
            var id=req.params.id
            console.log(id);
            connection.query('delete from contact Where id = ?',[id],function (err, result) 
            {
                if (err) throw err;
                res.send(result);
           });
        };

        exports.update = function(req,res)
        {
          var id=req.params.id;
          var data=req.body;
          console.log(data);
          connection.query('update contact SET name=?,email=?,number=?,gender=?,year=?,subj1=?,subj2=?,subj3=?,subj4=? Where id = ?',[data.name,data.email,data.number,data.gender,data.year,data.subj1,data.subj2,data.subj3,data.subj4,id],function (err, result)
          {
            if (err) throw err;
            res.send(result);
          });
        };

        exports.sendHtml = function(req, res) 
        {
            res.sendfile('./public/index.html'); 
        };
   