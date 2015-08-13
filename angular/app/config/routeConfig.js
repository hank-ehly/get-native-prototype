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

// create site_top service to feed JSON route data to routes.js
