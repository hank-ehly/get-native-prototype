(function() {
  'use strict';

  var userAccountCtrl = function($scope) {

  	$scope.test = 'foouserAccount';

  };

  userAccountCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('userAccountCtrl', userAccountCtrl);

})();
