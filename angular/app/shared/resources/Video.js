(function() {
  'use strict';

  var Video = function($resource, apiBaseUrl) {

  	var url,
  			paramDefaults,
  			actions;

    url           = apiBaseUrl + '/videos/:id.json';
    paramDefaults = { id: '@id' };
    actions       = {
              save: { method: 'POST' },
            update: { method: 'PUT' }
                    };

    return { resource: $resource(url, paramDefaults, actions) };

  };

  angular
    .module('angularApp')
    .factory('Video', Video);

  Video.$inject = ['$resource', 'apiBaseUrl'];

})();
