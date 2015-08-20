(function() {
  'use strict';

  var LanguageModule = function($resource) {

    var url,
        paramDefaults,
        actions;
        
  	url        = 'http://localhost:3000/language_modules/:id.json';
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
  	.factory('LanguageModule', LanguageModule);

  LanguageModule.$inject = ['$resource'];

})();
