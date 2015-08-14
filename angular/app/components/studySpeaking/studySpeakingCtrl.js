(function() {
  'use strict';

  var studySpeakingCtrl = function($scope) {

  	$scope.test = 'foostudySpeaking';

  };

  studySpeakingCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('studySpeakingCtrl', studySpeakingCtrl);

})();
