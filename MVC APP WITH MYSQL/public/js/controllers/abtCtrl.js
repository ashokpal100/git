angular.module('abtCtrl', []).controller('abtController', function($scope,$http,contactSrv) {

    
    var  refresh = function(){
   		contactSrv.getData().success(function(response){
	  		 console.log("i got the data i received");
	  		 $scope.contactList= response;
         console.log($scope.contactList);
	  	});
    };

   $scope.showContact = function(){
	  	refresh();
	};
});