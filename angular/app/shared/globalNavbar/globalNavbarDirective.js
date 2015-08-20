(function() {
  'use strict';

  var globalNavbar = function(authService) {
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

        // select current language
        $scope.languages        = ['Japanese', 'English'];
        $scope.selectedLanguage = 'Japanese';
        $scope.selectLanguage   = function(language) { $scope.selectedLanguage = language; };

        // define main bar items
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

  globalNavbar.$inject = ['authService'];

})();
