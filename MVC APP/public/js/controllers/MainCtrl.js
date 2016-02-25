angular.module('mainCtrl', []).controller('mainController', function($scope,$http, contactSrv) {
    console.log("I AM IN MAIN CTRL");
    $scope.tagline = 'WELCOME TO HOME';   
    $scope.contact={};
	
      $scope.addContact = function() 
      {
			console.log($scope.contact);
			  if ($scope.contact.name!= undefined && $scope.contact.email!= undefined && $scope.contact.number!= undefined){
			   contactSrv.create($scope.contact).success(function(data)
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

