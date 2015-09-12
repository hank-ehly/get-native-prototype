(function() {
  'use strict';

  var Category = function($resource, apiBaseUrl) {

  	var url,
  			paramDefaults,
  			actions;

    url           = apiBaseUrl + '/categories/:id.json';
    paramDefaults = { id: '@id' };
    actions       = {
              save: { method: 'POST' },
            update: { method: 'PUT' }
                    };

    return $resource(url, paramDefaults, actions);

  };

  angular
    .module('angularApp')
    .factory('Category', Category);

  Category.$inject = ['$resource', 'apiBaseUrl'];

})();
