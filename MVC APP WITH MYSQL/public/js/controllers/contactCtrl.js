
angular.module('contactCtrl', []).controller('contactController', function($scope,$http, $window, contactSrv) {

    $scope.tagline = 'WEL COME TO CONTACTS LIST PAGE';
    
    var  refresh = function(){
   		contactSrv.getData().success(function(response){
	  		 console.log("i got the data i received");
	  		 $scope.contactList= response;
         console.log( $scope.contactList);
			   $scope.contact="";
	  	});
    };
   $scope.showContact = function(){
	  	refresh();
	};

     $scope.remove = function(id){
        if ($window.confirm("Are you sure you want to delete this record?")) 
        {
                console.log(id);
                contactSrv.delete(id).success(function(response){
                    refresh();
                });      
        };
    };
    $scope.deSelect = function(){
        $scope.contact="";
    };

});