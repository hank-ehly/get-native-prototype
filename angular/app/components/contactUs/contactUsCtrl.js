(function() {
  'use strict';

  var contactUsCtrl = function($scope) {

  	$scope.emails = {
  		press: 'press.inquiries@getnative.com',
  		business: 'business.inquiries@getnative.com'
  	};

  };

  contactUsCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('contactUsCtrl', contactUsCtrl);

})();
