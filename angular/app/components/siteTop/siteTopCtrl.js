(function() {
  'use strict';

  var siteTopCtrl = function($scope, $rootScope, $state, Flash, Announce, authService) {

    $scope.login = function() { authService.login($scope.loginForm); };

  };

  siteTopCtrl.$inject = ['$scope', '$rootScope', '$state', 'Flash', 'Announce', 'authService'];

  angular
    .module('angularApp')
    .controller('siteTopCtrl', siteTopCtrl);

})();
