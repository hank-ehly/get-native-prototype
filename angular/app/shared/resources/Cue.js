(function() {
  'use strict';

  var Cue = function($resource, apiBaseUrl) {

    var url,
        paramDefaults,
        actions,
        addVideoToCue,
        removeFromCue;

    // ------------------------

    addVideoToCue = {
      method: 'POST',
      url: apiBaseUrl + '/add_video_to_cue/:cue_id/:video_id.json',
      params: {
          cue_id: '@cue_id',
        video_id: '@video_id'
      }
    };

    removeFromCue = {
      method: 'DELETE',
      url: apiBaseUrl + '/remove_video_from_cue/:user_id/:video_id.json',
      params: {
          cue_id: '@user_id',
        video_id: '@video_id'
      }
    };

    // ------------------------
        
  	url           = apiBaseUrl + '/cues/:id.json';
    paramDefaults = { id: '@id' };
    actions       = { 
              save: { method: 'POST' },
            update: { method: 'PUT' },
     addVideoToCue: addVideoToCue,
     removeFromCue: removeFromCue
                    };

  	return { resource: $resource(url, paramDefaults, actions) };

  };

  angular
  	.module('angularApp')
  	.factory('Cue', Cue);

  Cue.$inject = ['$resource', 'apiBaseUrl'];

})();
