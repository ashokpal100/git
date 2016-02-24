// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope,$http, Nerd) {
    console.log("I AM IN MAIN CTRL");
    $scope.tagline = 'WELCOME TO HOME';   
    $scope.contact={};
	
      $scope.addContact = function() 
      {
			console.log($scope.contact);
			  if ($scope.contact.name!= undefined && $scope.contact.email!= undefined && $scope.contact.number!= undefined){
			   Nerd.create($scope.contact).success(function(data)
			   {
				console.log(data);
				alert("Data successfully submit");
			    $scope.contact="";
			   });
		   }
		   else
		   {
		   	   	alert("fields are required");
		   };
	  };
});

