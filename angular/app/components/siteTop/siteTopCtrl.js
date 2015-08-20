(function() {
  'use strict';

  var siteTopCtrl = function($scope, $rootScope, $state, Flash, Announce) {

    $rootScope.$on('auth:login-success', function(ev, user) {
      $state.go('userHome');
      console.log(user);
      Flash.create('success', Announce.loginSuccess);
    });

    $rootScope.$on('auth:login-error', function(ev, reason) {
      console.log(ev);
      Flash.create('danger', Announce.whoops(reason.errors[0]));
    });

  };

  siteTopCtrl.$inject = ['$scope', '$rootScope', '$state', 'Flash', 'Announce'];

  angular
    .module('angularApp')
    .controller('siteTopCtrl', siteTopCtrl);

})();
