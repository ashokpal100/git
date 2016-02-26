var mysql  = require('mysql');

var connection = mysql.createConnection
   ({
     host     : 'localhost',
     user     : 'root',
     password : '2016',
     database : 'mydatabase'
   });
  connection.connect(function(err)
  {
    if(!err)
    {
        console.log("Database is connected ... \n\n");  
      } 
      else 
      {
         console.log("Error connecting database ... \n\n");  
      }
  });

      

        exports.findAll = function(req, res)
        {
             console.log("receive a get req");
             connection.query('select * from contact ',[],function (err, result) 
              {
                  if (err) throw err;
                  res.send(result);
             });

        };
        exports.add = function(req, res)
       {
            console.log(req.body);
            res.send(req.body);

             var contactUser= {name:req.body.name,email:req.body.email,number:req.body.number};

             connection.query('INSERT INTO contact SET ?',contactUser,function (err, result) 
             {
               if (err) throw err;
              //console.log('Changed ' + result.changedRows + ' rows');
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
                res.send(result);
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
          console.log(req.body);
          // connection.query('UPDATE contact SET name="" Where id = ?',[req.body.id],function (err, result)
          // {
          //   if (err) throw err;
          //   console.log('Changed ' + result.changedRows + ' rows');
          // });
        };

        exports.sendHtml = function(req, res) 
        {
            res.sendfile('./public/index.html'); 
        };
   