
angular.module('signupCtrl', []).controller('signupController', function($scope,$http, $window, contactSrv, $location) {
console.log("i am in signup ctrl")
     $('#logout').hide();
     $('#searchId').hide();
     $('#userName').hide();

     $('#signup').show();
     $('#login').show();
    $scope.user={};
         $scope.login= function(){
        contactSrv.login().success(function(response){
        });
    };
     $scope.signup= function(){
        console.log($scope.user);
        contactSrv.signup($scope.user).success(function(response){
        	console.log(response);
             if(response==1){
             	alert("User exist");
             	$scope.user="";
             	$location.path("/signup")
             }
             else if(response==2){
             	alert("Registration successfully_____");
             	$scope.user="";
             	$location.path("/login")
             };
             	
             
        });
    };
    

});