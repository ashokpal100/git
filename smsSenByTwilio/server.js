var express=require('express');
var app=express();
//require the Twilio module and create a REST client
var client = require('twilio')('ACddf112e19', '904f393e96e4');

//Send an SMS text message
client.sendMessage({

    to:'+919205313699', // Any number Twilio can deliver to
    from: '+1201', // A number you bought from Twilio and can use for outbound communication
    body: ':-hi bhagvat singh.........???' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }
});

//Place a phone call, and respond with TwiML instructions from the given URL
// client.makeCall({

//     to:'+16515556677 FREE', // Any number Twilio can call
//     from: '+14506667788', // A number you bought from Twilio and can use for outbound communication
//     url: 'http://www.example.com/twiml.php' // A URL that produces an XML document (TwiML) which contains instructions for the call

// }, function(err, responseData) {

//     //executed when the call has been initiated.
//     console.log(responseData.from); // outputs "+14506667788 FREE"

// });

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});