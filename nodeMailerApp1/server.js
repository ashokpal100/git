var express=require('express');
var nodemailer = require('nodemailer');
var app=express();

var transport = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: "ashokbaghel2015@gmail.com",
            pass: "vqzjudvcwusbdeje"
        }
    });
app.get('/',function(req,res){
    res.sendfile('index.html');
});
app.get('/send',function(req,res)
{
    var message = {
    from: 'Sender Name <sender@example.com>',
    to: req.query.to,
    subject:req.query.subject, 
    text: req.query.text,
    html:'<p><b>Hello</b> my name is ashok pal<img src=""/></p>'+
         '<p>Here\'s a nyan cat for you as an embedded attachment:<br/></p>',
          attachments : [
            {   // file on disk as an attachment
                filename: 'idm key',
                path: 'idm.txt' // stream this file
            }
        ]
       };
  console.log(message);
  transport.sendMail(message, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
    });
  // if you don't want to use this transport object anymore, uncomment following line
  //transport.close(); // close the connection pool
});
app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});
