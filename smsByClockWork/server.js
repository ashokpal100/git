var express=require('express');
var app=express();

// var clockwork = require('clockwork')({key:'a95db2e80d4a3acf55d8f98cfeb93f70023d96c6'});

// clockwork.sendSms({ To: '9034438351', Content: 'Test!'}, 
//   function(error, resp) {
//     if (error) {
//         console.log('Something went wrong', error);
//     } else {
//         console.log('Message sent',resp.responses[0].id);
//     }
// });

// // Twilio Credentials 
// var accountSid = 'AC7552e37056cff99b0c2951666dd96480'; 
// var authToken = '60ed09a7a1ec927072d6f1980e379639'; 
 
// //require the Twilio module and create a REST client 
// var client = require('twilio')(accountSid, authToken); //pass Ashokpal@123 //palap1991@gmail.com
 
// client.sendMessage({ 
//   to: "+12403173298", 
//   from: "+12403173298", 
//   body: "hiiii",   
// }, function(err, message) { 
//   if (err) {
//     console.log("erro");
//   } else{};
// });(308) 225-5968 FREE
// Twilio Credentials 
var accountSid = 'ACca9775cf68d0a16d3a2727c3cced3ad7'; 
var authToken = '4dd0d041ecab8f7bda65ad26ea9e201d'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
  to: "+919034438351", 
  from: "+17065509316", 
  body: "hello",  
  statusCallback: "hel", 
}, function(err, message) { 
  console.log(message.sid); 
});
app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});
