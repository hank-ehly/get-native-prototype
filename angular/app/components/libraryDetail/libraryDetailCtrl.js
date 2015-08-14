(function() {
  'use strict';

  var libraryDetailCtrl = function($scope) {

  	$scope.test = 'foolibraryDetail';

  };

  libraryDetailCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('libraryDetailCtrl', libraryDetailCtrl);

})();
