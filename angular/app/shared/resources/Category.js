(function() {
  'use strict';

  var Category = function($resource) {

  	var apiUrl,
  			paramDefaults,
  			actions;

    apiUrl = 'http://localhost:3000/categories/:id.json';

    paramDefaults = {
      id: '@id'
    };

    actions = {
      save: { method: 'POST' },
      update: { method: 'PUT' }
    };

    return $resource(apiUrl, paramDefaults, actions);

  };

  angular
    .module('angularApp')
    .factory('Category', Category);

  Category.$inject = ['$resource'];

})();
