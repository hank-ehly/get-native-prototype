(function() {
  'use strict';

  var contactUsCtrl = function($scope) {

  	$scope.test = 'foocontactUs';

  };

  contactUsCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('contactUsCtrl', contactUsCtrl);

})();
