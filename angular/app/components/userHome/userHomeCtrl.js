(function() {
  'use strict';

  var userHomeCtrl = function($scope) {

  	$scope.test = 'foouserHome';

  };

  userHomeCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('userHomeCtrl', userHomeCtrl);

})();
