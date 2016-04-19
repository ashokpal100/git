var mysql  = require('mysql');
// var mysql = require('../db/mysql').pool;
var fs = require('fs');
// load all the things we need
var bcrypt   = require('bcrypt-nodejs');
var connection = mysql.createConnection
   ({
     host     : 'localhost',
     user     : 'root',
     password : '2016',
     database : 'mydatabase'
   });

        exports.findAll = function(req, res)
        {
            console.log("receive a get req by all");
            connection.query('select * from login',[],function (err, result) 
            {
                  if (err) throw err;
                  res.send(result);
            });

        };
         exports.byId = function(req, res)
        {
            console.log("receive a get req by id");
            var id=req.params.id;
            console.log(id);
            connection.query('select * from login where id=?',[id],function (err, result) 
            {
                  if (err) throw err;
                  res.send(result[0]);
            });

        };
        exports.signup = function(req, res)
       {
            console.log(req.body);
            
           connection.query('select * from login Where email = ?',[req.body.email],function (err, result) 
            {
              console.log(result);
               if (err) throw err;

               if(result.length)
               {
                  res.send("1");
               }
              else
              {
                  var data = req.body;
                  var pass= bcrypt.hashSync(data.password, bcrypt.genSaltSync(8), null);
                  console.log(pass);
                  var userSignup= {fname:data.fname,lname:data.lname,email:data.email,password:pass};
                  connection.query('INSERT INTO login SET ?',userSignup,function (err, result) 
                 {
                   if (err) throw err;
                   res.send("2");
                });
              };
               
            });
        };
        exports.login = function(req, res)
       {
           console.log("i am inside before query");
           var data1=req.body;
           console.log(data1.password);
            connection.query('select * from login Where email = ?',[data1.email],function (err, result) 
            {
              console.log(result);
               if (err) throw err;

               if(!result.length)
                res.send("1");
              else{
                    if(bcrypt.compareSync(data1.password, result[0].password))  
                          res.send(result[0]);
                    else
                        res.send("2");
              };
            });
        };
        // exports.profile = function(req, res)
        // {
        //    res.sendfile('./public/views/profile.html'); 
        // };

        // exports.byId = function(req, res)
        // {
        //     //var id=req.params.id;
        //     console.log("i am ins side findById");
        //    //  console.log(id);
        //    //  connection.query('select * from login Where id = ?',[id],function (err, result) 
        //    //  {
        //    //      if (err) throw err;
        //    //      res.json(result[0]);
        //    // });
        // };

   		// exports.delete = function(req,res)
   		// {
     //        var id=req.params.id
     //        console.log(id);
     //        connection.query('delete from contact Where id = ?',[id],function (err, result) 
     //        {
     //            if (err) throw err;

     //             res.redirect('/login');
     //       });
     //    };

     //    exports.update = function(req,res)
     //    {
     //      var id=req.params.id;
     //      var data=req.body;
     //      console.log(data);
     //      connection.query('update contact SET name=?,email=?,number=?,gender=?,year=?,subj1=?,subj2=?,subj3=?,subj4=? Where id = ?',[data.name,data.email,data.number,data.gender,data.year,data.subj1,data.subj2,data.subj3,data.subj4,id],function (err, result)
     //      {
     //        if (err) throw err;
     //        res.send(result);
     //      });
     //    };

        exports.sendHtml = function(req, res) 
        {
            res.sendfile('./public/index.html'); 
        };
   