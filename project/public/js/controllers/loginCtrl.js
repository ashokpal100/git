angular.module('loginCtrl', []).controller('loginController', function($scope, $http,contactSrv, $location) {
    $scope.user={};
    console.log($scope.user);
    $scope.login= function(){
        console.log($scope.user);
        contactSrv.login($scope.user).success(function(response){
        	console.log(response);
        	$scope.user=response;
        	var userId=$scope.user.id;
             if(response==1){
             	alert('No user found!!....');
                $scope.user="";
                $location.path("/login");
             }else if(response==2){
             	alert('password not match!!....');
             	$scope.user="";
             	$location.path("/login");
             }
             else{
             	alert('login successfully!!....');
             	$location.path("/profile/"+userId);
             };
        });
    };
});