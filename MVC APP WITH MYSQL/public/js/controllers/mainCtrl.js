angular.module('mainCtrl', []).controller('mainController', function($scope,$http, contactSrv) {
    console.log("I AM IN MAIN CTRL");
    $scope.tagline = 'WELCOME TO HOME';   
    $scope.contact={};
	
      $scope.addContact = function() 
      {
			console.log($scope.contact);
			  if (typeof($scope.contact.name)=='undefined') 
			  	{
			  		$scope.msg1='Name is required..';
			  		$('#validitionMsg1').show();
			  	}
			  	else
			  	{
			  		$('#validitionMsg1').hide();
			  	};

			  	if (typeof($scope.contact.email)=='undefined') 
			  	{
			  		$scope.msg2='Email is required..';
			  		$('#validitionMsg2').show();
			  	}
			  	else
			  	{
			  		$('#validitionMsg2').hide();
			  	};

			  	if (typeof($scope.contact.number)=='undefined') 
			  	{
			  		$scope.msg3='Mobile Number is required..';
			  		$('#validitionMsg3').show();
			  	}
			  	else
			  	{
			  		$('#validitionMsg3').hide();
			  	};

			   if ( typeof($scope.contact.name)!='undefined' && typeof($scope.contact.email)!='undefined' && typeof($scope.contact.number)!='undefined') 
			   	{
			   		contactSrv.create($scope.contact).success(function(data)
				   {
					console.log(data);
				    $scope.contact="";
				    $scope.submitData='submit data successfully..';
				    $('#submitMsg').show();
				   });
			   	}else
			   	{
			   		$('#submitMsg').hide();
			   	}
	  };
});

