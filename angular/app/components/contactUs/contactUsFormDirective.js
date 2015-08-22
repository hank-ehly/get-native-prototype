(function() {
  'use strict';

  var contactUsForm = function() {
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      templateUrl: 'components/contactUs/contactUsFormTemplate.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope) {

      	$scope.subjects = [	
                            'subject 1', 
      											'subject 2', 
      											'subject 3', 
      											'subject 4'
                          ];

      }
    };
  };

  angular
    .module('angularApp')
    .directive('contactUsForm', contactUsForm);

  contactUsForm.$inject = [];

})();

// iElm, iAttrs, controller << include in link: function(...) if needed