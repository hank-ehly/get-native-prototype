(function() {
  'use strict';

  var libraryTopCtrl = function($scope) {

  	$scope.test = 'foolibraryTop';

  };

  libraryTopCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('libraryTopCtrl', libraryTopCtrl);

})();
