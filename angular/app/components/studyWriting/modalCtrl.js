(function() {
  'use strict';

  var modalCtrl = function($scope, answer, $modalInstance) {

  	$scope.answer = answer;

  	$scope.ok = function () {
	    $modalInstance.close();
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };

  };

  angular
    .module('angularApp')
    .controller('modalCtrl', modalCtrl);

  modalCtrl.$inject = ['$scope', 'answer', '$modalInstance'];

})();
