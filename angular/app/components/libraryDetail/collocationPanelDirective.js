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



        // click handler for when you click inside the video-script box
        $scope.videoScriptClickHandler = function(e) {

          // you deduce whether or not you clicked a collocation by looking for
          // the class 'collocation' on the clicked element
          var its_a_collocation   = e.target.className === 'collocation' ? true : false;

          if (its_a_collocation) {

            // get the clicked collocation's text
            var collocationText = e.target.textContent;

            // this will set the heading of the collocation
            // panel to the text of the clicked collocation element
            $scope.selectedCollocationQuote = collocationText;

            // within the list of collocations for the selected video script (see libraryDetailCtrl),
            // find a collocation whose text matches the text of the clicked collocation element.
            // If you find a match, echo that collocation's description in the panel
            angular.forEach($scope.collocations, function(c) {

              if (c.quote === collocationText) {
                $scope.selectedCollocationDescription = c.description;
              }

            }); // forEach

          } // its_a_collocation

        }; // videoScriptClickHandler


        

      } // end link
    }; // end return
  }; // end collocationPanel

  angular
    .module('angularApp')
    .directive('collocationPanel', collocationPanel);

  collocationPanel.$inject = [];

})();

// iElm, iAttrs, controller << include in link: function(...) if needed
