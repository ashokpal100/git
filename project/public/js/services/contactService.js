angular.module('contactService', [])

  .service('contactSrv', function($http) {
    return {
                signup : function(data) {
    				return $http.post('/signup', data);
    			},
    			login : function(data) {
    				return $http.post('/login', data);
    			},
                getData : function() {
                    return $http.get('/userList');
                },
                getData1 : function(id) {
                    console.log("i am in service");
                    console.log(id);
                    return $http.get('/userData/'+id);
                }
            }       
});