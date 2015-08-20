(function() {
  'use strict';

  var User = function($resource) {

    var url,
        paramDefaults,
        actions;
        
  	url        = 'http://localhost:3000/users/:id.json';
    paramDefaults = { id: '@id' };
    actions       = { save: { method: 'POST' },
                      update: { method: 'PUT' }
                    };

  	return {
  		resource: $resource(url, paramDefaults, actions)
  	};

  }

  angular
  	.module('angularApp')
  	.factory('User', User);

  User.$inject = ['$resource'];

})();
