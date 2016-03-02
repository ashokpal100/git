angular.module('contactService', [])

  .service('contactSrv', function($http) {
  	var storeValue;
    return {
            getData : function() {
				return $http.get('/contactList');
			},
			getData1 : function(id) {
				return $http.get('/contactList/'+id);
			},
			delete : function(id) {
				return $http.delete('/contactList/'+id);
			},
			update : function(id, data) {
				return $http.put('/contactList/' + id, data);
			},
            create : function(data) {
                return $http.post('/contactList', data);
            },
            setValue : function(id){
            	 this.storeValue=id;
            },
            getValue : function(){
            	return this.storeValue;
            }
    }       

});





