(function() {
  'use strict';

  angular
    .module('angularApp')
    .service('authService', ['$auth', '$state', 'Flash', 'Announce', function($auth, $state, Flash, Announce) {

      this.logout = function() {
        $auth.signOut()
          .then(function(res) {
          	console.log(res);
            $state.go('siteTop');
            Flash.create('success', Announce.logoutSuccess);
          })
          .catch(function(res) {
            Flash.create('danger', res.data.errors[0]);
          });
      };

    }]);

})();
