(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(['$authProvider', function($authProvider) {

      $authProvider.configure({
        apiUrl: 'http://localhost:3000',
        confirmationSuccessUrl: 'http://localhost:9000/#/userHome'
      });


    }])
    .run(['$rootScope', '$state', 'Flash', 'Announce', function($rootScope, $state, Flash, Announce) {
 
    	/*
    	 * 	fired when an error occurs during transition. It's important to note that 
    	 *	if you have any errors in your resolve functions (javascript errors, 
    	 *	non-existent services, etc) they will not throw traditionally. 
    	 *	You must listen for this $stateChangeError event to catch ALL errors. 
    	 *	Use event.preventDefault() to prevent the $UrlRouter from reverting the 
    	 *	URL to the previous valid location (in case of a URL navigation).
    	 */
    	
      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) { // jshint ignore:line
        $state.go('siteTop');
        console.log(error);
      });

      /*
       * 	Broadcast when a user's token fails validation using the $auth.validateUser method. 
			 *	This is different from the auth:validation-error in that it indicates an invalid token, 
			 *	whereas the auth:validation-error event indicates an error in the validation process.
       */
      	
      $rootScope.$on('auth:invalid', function() {
        Flash.create('danger', Announce.authInvalid);
      });

    }]);

})();
