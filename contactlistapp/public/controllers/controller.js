var mainApp = angular.module("mainApp", []);
         
    mainApp.controller('contactCtrl', function($scope,$http) {
    	console.log("hiiiiiii");

    var refresh = function(){
    	$http.get('/contactlist').success(function(response){
    	console.log("i got the data i receive");
    	$scope.contactlist=response;
    	$scope.contact="";
      });

    };
    refresh();
    $scope.addContact = function()
    {
    	console.log($scope.contact);
    	$http.post('/contactlist',$scope.contact).success(function(data)
    	{
    		console.log(data);
    		refresh();
    	});
    };
       
        //$scope.contactlist=contactlist;

    });