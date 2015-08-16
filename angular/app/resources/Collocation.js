(function() {
  'use strict';

  var Collocation = function($resource) {

  	var apiUrl,
  			paramDefaults,
  			actions;

    apiUrl = 'http://localhost:3000/collocations/:id.json';

    paramDefaults = {
      id: '@id'
    }

    actions = {
      save: { method: 'POST' },
      update: { method: 'PUT' }
    }

    return $resource(apiUrl, paramDefaults, actions);

  }

  angular
    .module('angularApp')
    .factory('Collocation', Collocation);

  Collocation.$inject = ['$resource'];

})();
