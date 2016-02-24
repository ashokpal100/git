// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', []).controller('NerdController', function($scope,$http, Nerd) {

    $scope.tagline = 'WEL COME TO CONTACTS LIST PAGE';
    
    var  refresh = function(){
   		Nerd.getdata().success(function(response){
	  		 console.log("i got the data i received");
	  		 $scope.contactlist= response;
			 $scope.contact="";
	  	});
    };

   $scope.showcontact = function(){
	  	refresh();
	};

	$scope.edit = function(id){
        console.log(id);
        Nerd.getdata1(id).success(function(response){
             $scope.contact = response;
        });
    };
     $scope.remove = function(id){
    	console.log(id);
    	Nerd.delete(id).success(function(resp){
    		refresh();
    	});
    };
    $scope.update = function(){
        console.log($scope.contact._id);
        Nerd.update($scope.contact._id , $scope.contact).success(function(response){
            refresh();

        });
    };
    $scope.deSelect = function(){
        $scope.contact="";
    };

});