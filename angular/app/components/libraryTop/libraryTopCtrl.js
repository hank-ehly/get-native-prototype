(function() {
  'use strict';

  var libraryTopCtrl = function($scope, $http) {

  	$scope.categories = ['Business', 'Food', 'Culture', 'Language'];

  	// retrieve JSON search data
  	function getFakeSearchResultsSuccess(res) { $scope.searchResults = res.data; }
  	function getFakeSearchResultsFailure(res) { console.log('Error', res); }
  	$http.get('shared/fakeVideoData.json').then(getFakeSearchResultsSuccess, getFakeSearchResultsFailure);


  	// ordering search results on <th ng-click>
  	$scope.predicate = 'created';
  	$scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    // show more pagination

  };

  angular
    .module('angularApp')
    .controller('libraryTopCtrl', libraryTopCtrl);

  libraryTopCtrl.$inject = ['$scope', '$http'];

})();
