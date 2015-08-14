(function() {
  'use strict';

  var registrationCtrl = function($scope) {

  	$scope.test = 'fooregistration';

  };

  registrationCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('registrationCtrl', registrationCtrl);

})();
