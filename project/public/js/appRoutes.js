angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/',      {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })

        .when('/signup',{
            templateUrl: 'views/signup.html',
            controller: 'signupController'
        })
         .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
         .when('/logout', {
            templateUrl: 'views/home.html',
            controller: 'logoutController'
        })
        // .when('/map', {
        //     templateUrl: 'views/map.html',
        //     //controller: 'mapController'
        // })
         .when('/profile/:userId', {
            templateUrl: 'views/profile.html',
            controller: 'profileController'
        });

    $locationProvider.html5Mode(true);

}]);