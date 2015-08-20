(function() {
  'use strict';

  angular
    .module('angularApp')
    .service('authService', ['$auth', '$state', 'Flash', 'Announce', function($auth, $state, Flash, Announce) {

      // login the user and redirect them to userHome
      this.login = function(loginForm) {
        $auth.submitLogin(loginForm)
          .then(function() {
            $state.go('userHome');
            Flash.create('success', Announce.loginSuccess);
          })
          .catch(function(res) {
            Flash.create('danger', Announce.whoops(res.errors[0]));
          });
      };

      // logout the user and redirect them to siteTop
      this.logout = function() {
        $auth.signOut()
          .then(function() {
            $state.go('siteTop');
            Flash.create('success', Announce.logoutSuccess);
          })
          .catch(function(res) {
            Flash.create('danger', Announce.whoops(res.data.errors[0]));
          });
      };

      // register the user
      this.submitRegistration = function(registrationForm) {
        $auth.submitRegistration(registrationForm)
          .then(function(res) {
            Flash.create('success', Announce.registrationSuccess(res.data.data.email));
          })
          .catch(function(res) {

            /*
             *
             * you should be doing angular validation here
             *
             */

            var message = document.createElement('DIV');

            var headingTextNode = document.createTextNode('Please fix the following errors and try again.');
            var headingElement = document.createElement('H3');
            headingElement.appendChild(headingTextNode);

            // create HTML error container
            var errorContainer = document.createElement('OL');

            // array of errors
            var errorMessages = res.data.errors.full_messages; // jshint ignore:line

            // For each error message
            // 1) create a new text node, and create a new element, 
            //    and append the new text node to the new element
            // 2) append the new element to the errorContainer
            angular.forEach(errorMessages, function(em) {

              var errorElement = document.createElement('LI');
              var errorTextNode = document.createTextNode(em);

              errorElement.appendChild(errorTextNode);
              errorContainer.appendChild(errorElement);

            });

            message.appendChild(headingElement);
            message.appendChild(errorContainer);

            Flash.create('danger', message);

          });
      };

    }]);

})();
