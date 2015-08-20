(function() {
  'use strict';

  var Video = function($resource) {

  	var apiUrl,
  			paramDefaults,
  			actions;

    apiUrl = 'http://localhost:3000/videos/:id.json';

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
    .factory('Video', Video);

  Video.$inject = ['$resource'];

})();
