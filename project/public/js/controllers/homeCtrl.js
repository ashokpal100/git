angular.module('homeCtrl', []).controller('homeController', function($scope,$http, contactSrv) {
    console.log("I AM IN home CTRL");
     $('#logout').hide();
     $('#searchId').hide();
     $('#userName').hide();

     $('#signup').show();
     $('#login').show();
});

