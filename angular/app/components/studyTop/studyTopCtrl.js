(function() {
  'use strict';

  var studyTopCtrl = function($scope) {

  	$scope.test = 'foostudyTop';

  };

  studyTopCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('studyTopCtrl', studyTopCtrl);

})();
