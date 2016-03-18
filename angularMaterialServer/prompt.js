var app = angular.module('plunker', ['ngMaterial', 'ngMessages']);

app.controller('MainCtrl', function($scope, $mdDialog) {
  
   $scope.retter = [{
          _id: '56e827ba0ec7a8d02bf7747d',
          name: 'test',
          info: 'testinfo',
          type: 'kød',
          active: true
        },{
          _id: '56e827ba0ec7a8d02bf77473',
          name: 'test3',
          info: 'testinfo3',
          type: 'kød',
          active: true
        },{
          _id: '56e827ba0ec7a8d02bf77474',
          name: 'test4',
          info: 'testinfo4',
          type: 'salat',
          active: false
        }];
  
    $scope.types = ['kød','salat','kartofler'];
    
    $scope.tableRows = ['Navn:','Info:','Type:','Aktiv:','Slet:']

    $scope.showPrompt = function(ev, ret, value) {
      
      var getValue = function(){
      switch(value){
        case 'Navn':
        currentValue = ret.name;
        break;
        case 'Info':
        currentValue = ret.info;
        break;
        case 'Type':
        currentValue = ret.type;
        break;
      }
      return currentValue;
    };
    var setValue = function(result){
      switch(value){
      case 'Navn':
      ret.name = result;
      break;
      case 'Info':
      ret.info = result;
      break;
      case 'Type':
      ret.type = result;
      break;
    }
  };
  
    var confirm = $mdDialog.prompt()
    .title('Rediger ' + value)
    .textContent('Indtast en ny værdi for: ' + value)
    .placeholder(getValue())
    .ariaLabel('Ny ' + value)
    .targetEvent(ev)
    .ok('Accepter')
    .cancel('Annuller');
    $mdDialog.show(confirm).then(function(result) {
      setValue(result);
    });
    var currentValue;

    //retService.update(ret);
    //socket.syncUpdates('ret', $scope.retter);
  };
  
});
