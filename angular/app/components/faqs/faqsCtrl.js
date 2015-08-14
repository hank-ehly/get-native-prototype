(function() {
  'use strict';

  var faqsCtrl = function($scope) {

  	$scope.test = 'foofaqs';

  };

  faqsCtrl.$inject = ['$scope'];

  angular
    .module('angularApp')
    .controller('faqsCtrl', faqsCtrl);

})();
