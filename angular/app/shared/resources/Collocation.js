(function() {
  'use strict';

  var Collocation = function($resource, apiBaseUrl) {

  	var url,
  			paramDefaults,
  			actions;

    url           = apiBaseUrl + '/collocations/:id.json';
    paramDefaults = { id: '@id' };
    actions       = {   
              save: { method: 'POST' },
            update: { method: 'PUT' }
                    };

    // ------------------------

    function wrapCollocations(script, collocations, tag, className) {
      var result = script;

        angular.forEach(collocations, function(c) {
          var quote, start, end, substr, newSub;

          // initialize variables
          quote   = c.quote;
          start   = result.indexOf(quote);
          end     = start + quote.length;
          substr  = result.substring(start, end);

          // assemble replacement element
          newSub  = '<' + tag;
          newSub += ' class="' + className + '"';
          newSub += '>';
          newSub += substr;
          newSub += '</' + tag + '>';

          // do the replacement
          result = result.replace(substr, newSub);

        });

        return result;
    }

    // ------------------------

    return {
      resource: $resource(url, paramDefaults, actions),
          wrap: wrapCollocations
    };

  };

  angular
    .module('angularApp')
    .factory('Collocation', Collocation);

  Collocation.$inject = ['$resource', 'apiBaseUrl'];

})();
