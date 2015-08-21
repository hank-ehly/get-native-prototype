(function() {
  'use strict';

  var User = function($resource, apiBaseUrl) {

    var url,
        paramDefaults,
        actions,
        hasVideo;

    // -----------------

    hasVideo = {
      method: 'GET',
      url: apiBaseUrl + '/hasVideo/:user_id/:video_id.json',
      params: {
        user_id: '@user_id',
        video_id: '@video_id'
      }
    };

    // -----------------
        
  	url           = apiBaseUrl + '/users/:id.json';
    paramDefaults = { id: '@id' };
    actions       = { 
              save: { method: 'POST' },
            update: { method: 'PUT' },
          hasVideo: hasVideo
                    };

  	return { resource: $resource(url, paramDefaults, actions) };

  };

  angular
  	.module('angularApp')
  	.factory('User', User);

  User.$inject = ['$resource', 'apiBaseUrl'];

})();
