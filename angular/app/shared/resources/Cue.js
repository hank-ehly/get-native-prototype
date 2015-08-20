(function() {
  'use strict';

  var Cue = function($resource) {

    var url,
        paramDefaults,
        actions;
        
  	url        = 'http://localhost:3000/cues/:id.json';
    paramDefaults = { id: '@id' };
    actions       = { save: { method: 'POST' },
                      update: { method: 'PUT' }
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
