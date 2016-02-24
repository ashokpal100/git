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
    $scope.remove = function(id){
    	console.log(id);
    	$http.delete('/contactlist/' + id).success(function(resp){
    		refresh();
    	});
    };
    $scope.edit = function(id){
        console.log(id);
        $http.get('/contactlist/' + id).success(function(response){
             $scope.contact = response;
        });
    };
    $scope.update = function(){
        console.log($scope.contact._id);
        $http.put('/contactlist/'+  $scope.contact._id , $scope.contact).success(function(response){
            refresh();
        });
    };
    $scope.deSelect = function(){
        $scope.contact="";
    }
    });