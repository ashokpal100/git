angular.module('mainCtrl', []).controller('mainController', function($scope,$http, contactSrv) {
    console.log("I AM IN MAIN CTRL");
    $scope.tagline = 'WELCOME TO HOME';   
    $scope.contact={};
    

     $scope.years = [
        {year:'2013'},
        {year:'2014'},
        {year:'2015'},
        {year:'2016'},
        {year:'2017'}];
      $scope.addContact = function() 
      {
       		  
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

			 //  	console.log($scope.contact.subj1);
			 //  	console.log($scope.contact.subj2);
			 //  	console.log($scope.contact.subj3);
			 //  	console.log($scope.contact.subj4);
			 //  	if(($scope.contact.subj1)==true)
				//   	{
				//   		$scope.contact.subj1='MCA';
				//   		console.log($scope.contact.subj1);
				//   	}
				//   	else
				//   	{
				//   		$scope.contact.subj1='undefined';
				//   	};
				// if(($scope.contact.subj2)==true)
				//   	{
				//   		$scope.contact.subj2='MBA';
				//   		console.log($scope.contact.subj2);
				//   	}else
				//   	{
				//   		$scope.contact.subj2='undefined';
				//   	};
				// if(($scope.contact.subj3)==true)
				//   	{
				//   		$scope.contact.subj3='Mtech';
				//   		console.log($scope.contact.subj3);
				//   	}else
				//   	{
				//   		$scope.contact.subj3='undefined';
				//   	};
				// if(($scope.contact.subj4)==true)
				//   	{
				//   		$scope.contact.subj4='Btech';
				//   		console.log($scope.contact.subj4);
				//   	}else
				//   	{
				//   		$scope.contact.subj4='undefined';
				//   	};

			   if ( typeof($scope.contact.name)!='undefined' && typeof($scope.contact.email)!='undefined' && typeof($scope.contact.number)!='undefined') 
			   	{
			   		$scope.contact.year=$scope.contact.year.year;
			   		console.log($scope.contact);
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

