(function() {
  'use strict';

  var Cue = function($resource) {

    var url,
        paramDefaults,
        actions;
        
  	url        = 'http://localhost:3000/cues/:id.json';
    paramDefaults = { id: '@id' };
    actions       = { save: { method: 'POST' },
                      update: { method: 'PUT' },
                      addVideoToCue: {
                        method: 'POST',
                        url: 'http://localhost:3000/add_video_to_cue/:cue_id/:video_id.json',
                        params: {
                          cue_id: '@cue_id',
                          video_id: '@video_id'
                        }
                      }
                    };

  	return {
  		resource: $resource(url, paramDefaults, actions)
  	};

  }

  angular
  	.module('angularApp')
  	.factory('Cue', Cue);

  Cue.$inject = ['$resource'];

})();
