(function() {
  'use strict';

  var studyShadowingCtrl = function($scope) {

  	$scope.test = 'foostudyShadowing';

  };

  studyShadowingCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('studyShadowingCtrl', studyShadowingCtrl);

})();
