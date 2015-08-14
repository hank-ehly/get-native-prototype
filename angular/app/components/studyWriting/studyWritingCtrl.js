(function() {
  'use strict';

  var studyWritingCtrl = function($scope) {

  	$scope.test = 'foostudyWriting';

  };

  studyWritingCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('studyWritingCtrl', studyWritingCtrl);

})();
