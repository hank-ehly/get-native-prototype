(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(['$authProvider', 'apiBaseUrl', function ($authProvider, apiBaseUrl) {

      $authProvider.configure({

                        apiUrl: apiBaseUrl,
        confirmationSuccessUrl: 'http://localhost:9000/#/userHome'

      });


    }])
    .run(['$rootScope', '$state', 'Flash', 'Announce', '$auth', function($rootScope, $state, Flash, Announce, $auth) { // jshint ignore:line

      /*
       *  Broadcast when a user's token is successfully 
       *  verified using the $auth.validateUser method.
       */
      
      $rootScope.$on('auth:validation-success', function(e, user) { // jshint ignore:line
        
      });

      // Fired when the transition begins.
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) { // jshint ignore:line

      });

      /*
       *  Broadcast when users arrive from links contained in password-reset emails. 
       *  This can be used to trigger "welcome" notifications to new users.
       */

      $rootScope.$on('auth:email-confirmation-success', function(ev, user) {
        Flash.create('success', Announce.authEmailConfirmationSuccess(user.email));
      });


      /*
       *  Broadcast when a user arrives from a link contained in a confirmation email, 
       *  but the confirmation token fails to validate.
       */
      

      $rootScope.$on('auth:email-confirmation-error', function(ev, reason) {
        Flash.create('danger', Announce.whoops(reason.errors[0]));
      });


      /*
       *  Fired when an error occurs during transition. It's important to note that 
       *  if you have any errors in your resolve functions (javascript errors, 
       *  non-existent services, etc) they will not throw traditionally. 
       *  You must listen for this $stateChangeError event to catch ALL errors. 
       *  Use event.preventDefault() to prevent the $UrlRouter from reverting the 
       *  URL to the previous valid location (in case of a URL navigation).
       */

      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) { // jshint ignore:line
        $state.go('siteTop');
      });

      /*
       *  Broadcast when a user's token fails validation using the $auth.validateUser method. 
       *  This is different from the auth:validation-error in that it indicates an invalid token, 
       *  whereas the auth:validation-error event indicates an error in the validation process.
       */

      $rootScope.$on('auth:invalid', function() {
        Flash.create('danger', Announce.authInvalid);
      });

    }]);

})();
