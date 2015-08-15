(function() {
  'use strict';

  var userInterestsCtrl = function($scope) {

  	$scope.test = 'foouserInterests';

  };

  userInterestsCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('userInterestsCtrl', userInterestsCtrl);

})();
