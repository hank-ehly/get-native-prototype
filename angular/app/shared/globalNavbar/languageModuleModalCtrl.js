(function() {
  'use strict';

  var languageModuleModalCtrl = function($scope, $modalInstance, language) {

    $scope.language = language;

    $scope.addHandler = function() {
      console.log('add');
      $modalInstance.close();
    };

    $scope.justBrowseHandler = function() {
      console.log('just browse');
      $modalInstance.dismiss();
    };

    $scope.cancel = function() {
      console.log('cancelled');
      $modalInstance.dismiss('cancel');
    };

  };

  angular
    .module('angularApp')
    .controller('languageModuleModalCtrl', languageModuleModalCtrl);

  languageModuleModalCtrl.$inject = ['$scope', '$modalInstance', 'language'];

})();
