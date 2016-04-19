var controller = require('./models/contactController');
module.exports = function(app) {

            app.post('/signup', controller.signup);
            app.post('/login',controller.login);
            app.get('/userList',controller.findAll);

            app.get('/userData/:id',controller.byId);

            //app.delete('/contactList/:id',controller.delete);
            //app.put('/contactList/:id',controller.update);
            app.get('*',controller.sendHtml);
  };


// module.exports = function(app, passport) {
//     app.get('/', function(req, res) {
//         res.render('index.html'); 
//     });
//     app.get('/login', function(req, res) {

//         res.render('login.ejs', { message: req.flash('loginMessage') }); 
//     });

//     app.post('/login', passport.authenticate('local-login', {
//         successRedirect : '/profile', // redirect to the secure profile section
//         failureRedirect : '/login', // redirect back to the signup page if there is an error
//         failureFlash : true // allow flash messages
//     }));

//     app.get('/signup', function(req, res) {
//         res.render('signup.ejs', { message: req.flash('signupMessage') });
//     });

//     app.post('/signup', passport.authenticate('local-signup', {
//         successRedirect : '/profile', // redirect to the secure profile section
//         failureRedirect : '/signup', // redirect back to the signup page if there is an error
//         failureFlash : true // allow flash messages
//     }));
//     app.get('/profile', isLoggedIn, function(req, res) {
//         res.render('profile.ejs', {
//             user : req.user // get the user out of session and pass to template
//         });
//     });
//     app.get('/logout', function(req, res) {
//         req.logout();
//         res.redirect('/');
//     });
// };

// // route middleware to make sure a user is logged in
// function isLoggedIn(req, res, next) {

//     // if user is authenticated in the session, carry on 
//     if (req.isAuthenticated())
//         return next();
//     // if they aren't redirect them to the home page
//     res.redirect('/');
// }