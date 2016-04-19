angular.module('profileCtrl', []).controller('profileController', function($scope,$http,$routeParams, contactSrv) {

  $scope.id= $routeParams.userId;
  //$route.current.params.id
  console.log($scope.id);
  $('#logout').show();
  $('#searchId').show();
  $('#userName').show();
  $('#signup').hide();
  $('#login').hide();
    // var getDataAll= function(){
    //     contactSrv.getData().success(function(response){
    //         $scope.userList=response;
    //         console.log($scope.userList);
    //     });
    // };
    // getDataAll();
    var getDataById= function(){
        contactSrv.getData1($scope.id).success(function(response){
            $scope.user=response;
            console.log($scope.user);
        });
    };
    getDataById();

    $scope.map=function()
    {
      console.log("i am inside map");
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    }
});



