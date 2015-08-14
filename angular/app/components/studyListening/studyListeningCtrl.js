(function() {
  'use strict';

  var studyListeningCtrl = function($scope) {

  	$scope.test = 'foostudyListening';

  };

  studyListeningCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('studyListeningCtrl', studyListeningCtrl);

})();
