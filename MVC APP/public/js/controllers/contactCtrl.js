
angular.module('contactCtrl', []).controller('contactController', function($scope,$http, $window, contactSrv) {

    $scope.tagline = 'WEL COME TO CONTACTS LIST PAGE';
    
    var  refresh = function(){
   		contactSrv.getData().success(function(response){
	  		 console.log("i got the data i received");
	  		 $scope.contactList= response;
			 $scope.contact="";
	  	});
    };

   $scope.showContact = function(){
	  	refresh();
	};

	$scope.edit = function(id){
        console.log(id);
        contactSrv.getData1(id).success(function(response){
             $scope.contact = response;
        });
    };
     $scope.remove = function(id){
        if ($window.confirm("Are you sure you want to delete this record?")) 
        {
              console.log(id);
                contactSrv.delete(id).success(function(response){
                    refresh();
                });      
        } 
    };
    $scope.update = function(){
        console.log($scope.contact._id);
        contactSrv.update($scope.contact._id , $scope.contact).success(function(response){
            alert("update successful");
            refresh();

        });
    };
    $scope.deSelect = function(){
        $scope.contact="";
    };

});