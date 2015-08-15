(function() {
  'use strict';

  var faqsCtrl = function($scope, $http) {

    /*
     *
     * retrieve faqs.json and send to DOM
     *
     */

    function getFaqsJsonSuccess(res) {
      $scope.faqData = res.data;
    }

    function getFaqsJsonFailure(res) {
      console.log('getFaqsJsonFailure', res);
    }

    $http.get('components/faqs/faqs.json').then(getFaqsJsonSuccess, getFaqsJsonFailure);

    /*
    *
    * bootstrap
    *
    */

    $scope.isCollapsed = true;
    
  };

  faqsCtrl.$inject = ['$scope', '$http'];

  angular
    .module('angularApp')
    .controller('faqsCtrl', faqsCtrl);

})();
