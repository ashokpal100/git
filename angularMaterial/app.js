angular.module('firstApplication', ['ngMaterial']).controller('frameController', frameController);

    function frameController ($scope) 
    {  
            $scope.IsHidden = true;
            $scope.IsHidden1 = true;
            $scope.IsHidden2 = true;
            
            $scope.items = [{"name":"Ata","email":"test@.com","number":"9090909090"},
                            {"name":"pal","email":"test1@.com","number":"19090909090"}]
            
            $scope.ShowHide = function (value) {
                   if (value=='whFrm3') 
                    {
                        $scope.IsHidden = $scope.IsHidden ? false : true;
                    } 
                    else if (value=='whFrm5')
                    {
                        $scope.IsHidden1 = $scope.IsHidden1 ? false : true;
                    }
                    else
                    {
                        $scope.IsHidden2 = $scope.IsHidden2 ? false : true;
                    };
            };
    };