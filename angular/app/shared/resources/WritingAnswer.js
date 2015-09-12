(function() {
  'use strict';

  var WritingAnswer = function($resource, apiBaseUrl) {

  	var url,
  			paramDefaults,
  			actions;

    url           = apiBaseUrl + '/writing_answers/:id.json';
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
    .factory('WritingAnswer', WritingAnswer);

  WritingAnswer.$inject = ['$resource', 'apiBaseUrl'];

})();
