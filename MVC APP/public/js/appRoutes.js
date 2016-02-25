angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/',      {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        .when('/contact',{
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })
         .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'abtController'
        })
         .when('/more', {
            templateUrl: 'views/more.html',
            controller: 'moreController'
        });

    $locationProvider.html5Mode(true);

}]);