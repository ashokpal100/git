// grab the nerd model we just created
var Contact = require('./models/contacttbl');

    module.exports = function(app) {

        app.post('/contactlist',function(req,res){
            console.log(req.body);
            Contact.create({name:req.body.name,email:req.body.email,number:req.body.number},function(err,doc){
                res.json(doc);
            });
          }); 

        app.get('/contactlist',function(req, res){
             console.log("receive a get req");
               Contact.find(function(err,result){
               console.log(result);
               res.json(result);
           });

        });
        app.get('/contactlist/:id',function(req, res){
            var id=req.params.id;
            console.log(id);
            Contact.findOne({_id : id},function(err,doc){
                res.json(doc);
            })
        });

        app.delete('/contactlist/:id',function(req,res){
            var id=req.params.id
            console.log(id);
            Contact.remove({_id : id},function(err,doc){
                if(err)
                     res.send(err);
                res.json(doc);
            });
        });
        app.put('/contactlist/:id',function(req,res){
          var id=req.params.id;
          console.log(req.body);
          Contact.update({_id:id},{$set:{name: req.body.name,email:req.body.email, number : req.body.number}},function(err,doc){
              res.json(doc);
            });
        });

        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); 
        });

    };

