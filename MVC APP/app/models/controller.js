
var contact=require('./contacttbl');

       exports.add = function(req,res)
       {
            console.log(req.body);
            contact.create({name:req.body.name,email:req.body.email,number:req.body.number},function(err,doc){
                res.send(doc);
                
            });
        };

        exports.findAll = function(req, res)
        {
             console.log("receive a get req");
               contact.find(function(err,result){
               console.log(result);
               res.send(result);
               
           });

        };

        exports.findById = function(req, res)
        {
            var id=req.params.id;
            console.log(id);
            contact.findOne({_id : id},function(err,doc){
                res.send(doc);
            });
        };

   		exports.delete = function(req,res)
   		{
            var id=req.params.id
            console.log(id);
            contact.remove({_id : id},function(err,doc){
                if(err)
                     res.send(err);
                res.send(doc);
            });
        };

        exports.update = function(req,res)
        {
          var id=req.params.id;
          console.log(req.body);
          contact.update({_id:id},{$set:{name: req.body.name,email:req.body.email, number : req.body.number}},function(err,doc){
              res.send(doc);
            });
        };

        exports.sendHtml = function(req, res) 
        {
            res.sendfile('./public/index.html'); 
        };
   