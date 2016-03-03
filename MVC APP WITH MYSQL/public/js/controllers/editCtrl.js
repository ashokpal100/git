angular.module('editCtrl', []).controller('editController', function($scope,$http,$routeParams,contactSrv) {

	 $scope.contact={};
	 $scope.years = [
        {year:'2013'},
        {year:'2014'},
        {year:'2015'},
        {year:'2016'},
        {year:'2017'}];

      $scope.id= $routeParams.contactId;
      console.log($scope.id);

       contactSrv.getData1($scope.id).success(function(response){
    	   		$scope.contact=response;
    	   		for (var i = 0; i <$scope.years.length; i++) 
    	   		{
                      
                    if ($scope.contact.year==$scope.years[i].year) 
                        {
                           $scope.contact.year=$scope.years[i];
                        };
    	   		};
    	   		console.log($scope.contact);
	  	   });
    	
	  $scope.addContact= function(){
         $scope.contact.year=$scope.contact.year.year;
	  	 console.log($scope.contact);
         
        contactSrv.update($scope.id ,$scope.contact).success(function(response){
             $scope.submitData='update data successfully..';
             $('#submitMsg').show();
        	 $scope.contact="";

        });
    };

});



