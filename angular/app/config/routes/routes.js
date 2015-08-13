(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../components/siteTop/siteTop.html',
          controller: 'siteTopCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

})();
