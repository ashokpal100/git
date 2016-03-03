angular.module('moreCtrl', []).controller('moreController', function($scope) 
{ 

	$scope.contact={};
	 $scope.fruits = [
	 { name: 'apple'},
	 { name: 'orange'},
	 { name: 'pear'},
	 { name: 'naartjie'}];

	 console.log($scope.contact);
	 
});