angular.module('logoutCtrl', []).controller('logoutController', function($scope) 
{ 

	 $('#logout').hide();
     $('#searchId').hide();
     $('#userName').hide();

     $('#signup').show();
     $('#login').show();
});