(function() {
  'use strict';

  var globalNavbar = function(authService, $window, $location) {
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: '^globalCtrl', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      templateUrl: 'shared/globalNavbar/globalNavbarTemplate.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope) {


        $scope.languages = ['Japanese', 'English'];
        if ($location.search().lang === undefined) {
          $location.search('lang', $scope.languages[0]);  
        }

        $scope.selectedLanguage = $location.search().lang;

        $scope.$on('changeLanguage', function() {
          $scope.selectedLanguage = $location.search().lang;          
        });
      

        // this is the click handler for the language module dropdown
        $scope.langClickHandler = function(language) {
          $location.search('lang', language);
          $scope.$broadcast('changeLanguage'); // jshint ignore:line
        };

        // these are the left-navbar buttons
        // set 'restricted' if you wanna make them invisible to guests
        $scope.barItems = [
          { title: 'Home',    state: 'userHome',    restricted: true },
          { title: 'Library', state: 'libraryTop',  restricted: false },
          { title: 'Study',   state: 'studyTop',    restricted: true }
        ];

        // set active bar item on ng-click
        $scope.isActive       = function(i) { return $scope.active === i; };
        $scope.selectBarItem  = function(i) { $scope.active = i; };

        // logout on btn click
        $scope.logout = function() { authService.logout(); };

      }
    };
  };

  angular
    .module('angularApp')
    .directive('globalNavbar', globalNavbar);

  globalNavbar.$inject = ['authService', '$window', '$location'];

})();
