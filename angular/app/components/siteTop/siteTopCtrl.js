(function() {
  'use strict';

  var siteTopCtrl = function($scope) {

  	$scope.test = 'foo';

  };

  siteTopCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('siteTopCtrl', siteTopCtrl);

})();
