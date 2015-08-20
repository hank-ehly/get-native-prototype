(function() {
  'use strict';

  var collocationPanel = function() {
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
      templateUrl: 'components/libraryDetail/collocationPanelTemplate.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope) {



        // click handler for video script collocations
        $scope.videoScriptClickHandler = function(e) {

          var isCollocation = e.target.className === 'collocation' ? true : false;
          var collocationText = e.target.textContent;

          if (isCollocation) {

            $scope.selectedCollocationQuote = collocationText;

            angular.forEach($scope.collocations, function(c) {
              if (c.quote === collocationText) {
                $scope.selectedCollocationDescription = c.description;
              }
            });
          }
        };



      }
    };
  };

  angular
    .module('angularApp')
    .directive('collocationPanel', collocationPanel);

  collocationPanel.$inject = [];

})();

// iElm, iAttrs, controller << include in link: function(...) if needed
