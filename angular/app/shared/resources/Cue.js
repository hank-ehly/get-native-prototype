(function() {
  'use strict';

  var Cue = function($resource, apiBaseUrl) {

    var url,
        paramDefaults,
        actions,
        addVideoToCue;

    // ------------------------

    addVideoToCue = {
      method: 'POST',
      url: apiBaseUrl + '/add_video_to_cue/:cue_id/:video_id.json', // jshint ignore:line
      params: {
          cue_id: '@cue_id', // jshint ignore:line
        video_id: '@video_id' // jshint ignore:line
      }
    };

    // ------------------------
        
  	url           = apiBaseUrl + '/cues/:id.json';
    paramDefaults = { id: '@id' };
    actions       = { 
              save: { method: 'POST' },
            update: { method: 'PUT' },
     addVideoToCue: addVideoToCue
                    };

  	return { resource: $resource(url, paramDefaults, actions) };

  };

  angular
  	.module('angularApp')
  	.factory('Cue', Cue);

  Cue.$inject = ['$resource', 'apiBaseUrl'];

})();
