(function() {
  'use strict';

  angular
    .module('angularApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.router',
      'ng-token-auth',
      'flash',
      'ui.bootstrap',
      'youtube-embed',
      'timer'
    ]);

})();


/*
 * for future reference, it might be a better idea to query the DB 1 time per view, 
 * do all the searching on the server-side ONCE, and return a big JSON object designated
 * for that view
 */
