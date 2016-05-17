// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '17255558', // your App ID
        'clientSecret'  : 'cf932738d66b', // your App Secret
        'callbackURL'   : 'http://localhost:9090/auth/facebook/callback'
    }

};