// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/welcome.html',
			controller: 'MainController'
		})

		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})

		.when('/about', {
			templateUrl: 'views/geek.html',
			controller: 'aboutController'	
		});

	$locationProvider.html5Mode(true);

}]);
