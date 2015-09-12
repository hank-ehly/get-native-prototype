(function() {
  'use strict';

  var collocationPanel = function(Helper) {
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
      templateUrl: 'shared/collocationPanel/collocationPanelTemplate.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, iElm, iAttrs, controller) { // jshint ignore:line

        $scope.ss = iAttrs.class === 'studySpeaking' ? true : false;

        /*
         *
         * this function is here because it is used in both libraryDetailCtrl & userHome
         *
         */
        
          // click handler for when you click inside the video-script box
          function videoScriptClickHandler(e) { 

            if (Helper.hasClass(e.target, 'collocation')) {

              // get the clicked collocation's text
              var collocationText = e.target.textContent;

              // this will set the heading of the collocation
              // panel to the text of the clicked collocation element
              $scope.selectedQuote = collocationText;

              // within the list of collocations for the selected video script (see libraryDetailCtrl),
              // find a collocation whose text matches the text of the clicked collocation element.
              // If you find a match, echo that collocation's description in the panel
              angular.forEach($scope.collocations, function(c) {

                if (c.quote === collocationText) {
                  $scope.selectedDescription = c.description;
                }

              });
            } // if
          } // click

          $scope.videoScriptClickHandler = videoScriptClickHandler;

        } // link
    }; // return
  };

  angular
    .module('angularApp')
    .directive('collocationPanel', collocationPanel);

  collocationPanel.$inject = ['Helper'];

})();
