(function() {
  'use strict';

  var data = {

    authInvalid:   'Please login first.',
  	loginSuccess:  'You have successfully logged in.',
  	loginFailure:  'Whoops! Failed to login.',
    logoutSuccess: 'You have successfully logged out.',
    logoutFailure: 'Whoops! Failed to logout.',
    authEmailConfirmationSuccess: function(email) { return 'Welcome, ' + email + '. Your account has been verified.'; },
    registrationSuccess: function(email) {          return 'A registration email was sent to ' + email + '.'; },
    whoops: function(message) {                     return '<strong>Whoops!</strong> ' + message; }

  };

  angular
    .module('angularApp')
    .value('Announce', data);

})();