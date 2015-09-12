(function() {
  'use strict';

  var VideoScript = function($resource, apiBaseUrl) {

  	var url,
  			paramDefaults,
  			actions;

    url           = apiBaseUrl + '/video_scripts/:id.json';
    paramDefaults = { id: '@id' };
    actions       = {
              save: { method: 'POST' },
            update: { method: 'PUT' }
                    };

    return {
      resource: $resource(url, paramDefaults, actions)
    };

  };

  angular
    .module('angularApp')
    .factory('VideoScript', VideoScript);

  VideoScript.$inject = ['$resource', 'apiBaseUrl'];

})();
