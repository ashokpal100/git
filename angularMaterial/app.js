angular.module('firstApplication', ['ngMaterial']).controller('frameController', frameController);

    function frameController ($scope) {  
            $scope.IsHidden = true;
            $scope.IsHidden1 = true;
            $scope.IsHidden2 = true;
            $scope.ShowHide = function () {
                $scope.IsHidden = $scope.IsHidden ? false : true;
            }
            $scope.ShowHide1 = function () {
                $scope.IsHidden1 = $scope.IsHidden1 ? false : true;
            }
            $scope.ShowHide2 = function () {
                $scope.IsHidden2 = $scope.IsHidden2 ? false : true;
            } 
    }