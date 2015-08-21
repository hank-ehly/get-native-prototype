(function() {
  'use strict';

  var libraryTopCtrl = function($scope, $http, Video, Category) {

    // query DB for videos and categories
    Category.get(function(res) { $scope.categories = angular.fromJson(res.categories); });
    Video.resource.get(function(res) { 
      $scope.searchResults = angular.fromJson(res.videos); 
    });

  	// ordering search results on <th ng-click>
  	$scope.predicate = 'created';
  	$scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    // add category filter on ng-click
    $scope.selectCategory = function(i) {
      $scope.selectedCategory = $scope.categories[i].name;
    };

    // show more pagination
    // this needs work
    $scope.allowedNumberOfResults = 5;
    $scope.showMore = function() {
      var totalNumberOfResults = $scope.searchResults.length;

      if ($scope.allowedNumberOfResults < totalNumberOfResults) {
        $scope.allowedNumberOfResults += 5;
      } else if ($scope.allowedNumberOfResults >= totalNumberOfResults) {
        $scope.cantShowMore = true;
      }

    };

  };

  angular
    .module('angularApp')
    .controller('libraryTopCtrl', libraryTopCtrl);

  libraryTopCtrl.$inject = ['$scope', '$http', 'Video', 'Category'];

})();