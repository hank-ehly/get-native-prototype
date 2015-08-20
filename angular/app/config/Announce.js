(function() {
  'use strict';

  var data = {
    authInvalid: 'Please login first.',
  	loginSuccess: 'You have successfully logged in.',
  	loginFailure: 'Whoops! Failed to login.',
    logoutSuccess: 'You have successfully logged out.',
    logoutFailure: 'Whoops! Failed to logout.',
    whoops: function(message) {
    	return '<strong>Whoops!</strong> ' + message;
    }
  };

  angular
    .module('angularApp')
    .value('Announce', data);

})();
