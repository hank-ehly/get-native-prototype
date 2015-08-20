(function() {
  'use strict';

  var registrationCtrl = function($scope, $auth, $state, Flash) {

    function clearInput() {
      $scope.registrationForm.email = '';
      $scope.registrationForm.password = '';
      $scope.registrationForm.password_confirmation = ''; // jshint ignore:line
    }

    $scope.$on('auth:registration-email-success', function(ev, message) {
      message = 'A registration email was sent to ' + message.email;
      Flash.create('success', message);
      clearInput();
    });

    $scope.$on('auth:registration-email-error', function(ev, res) {
      // ** instead of full_messages, you should use angular validation **
      var message = 'Registration failed: ' + res.errors.full_messages[0]; // jshint ignore:line
      Flash.create('danger', message);
    });

  };

  registrationCtrl.$inject = ['$scope', '$auth', '$state', 'Flash'];

  angular
    .module('angularApp')
    .controller('registrationCtrl', registrationCtrl);

})();
