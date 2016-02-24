// public/js/services/NerdService.js
angular.module('NerdService', [])

  .factory('Nerd', function($http) {

    return {
            getdata : function() {
				return $http.get('/contactlist');
			},
			getdata1 : function(id) {
				return $http.get('/contactlist/'+id);
			},
			delete : function(id) {
				return $http.delete('/contactlist/'+id);
			},
			update : function(id, data) {
				return $http.put('/contactlist/' + id, data);
			},
            create : function(data) {
                return $http.post('/contactlist', data);
            }
    }       

});





