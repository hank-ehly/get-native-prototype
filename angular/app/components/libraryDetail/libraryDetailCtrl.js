(function() {
  'use strict';

  var libraryDetailCtrl = function($scope, $http, $stateParams) {

    /*
     *
     * Retrieve video reference from query
     *
     */

    // successfully found JSON
    function getFakeVideoDataSuccess(res) {

      var videos = res.data;
      angular.forEach(videos, function(video) {

        if (video.id === parseInt($stateParams.videoId)) {

          $scope.video = video;

          $scope.tabs = [
				    { title:'Japanese', content:$scope.video.scripts.japanese, active: true },
				    { title:'English', 	content:$scope.video.scripts.english }
				  ];

				  

        } // if
      }); // forEach videos
    } // getFakeVideoDataSuccess

    function getFakeVideoDataFailure(res) { console.log('Error', res); }
    $http.get('shared/fakeVideoData.json').then(getFakeVideoDataSuccess, getFakeVideoDataFailure);

    // video player settings
    $scope.playerVars = {
      controls: 1,
      modestbranding: 1,
      showinfo: 0
    };

  }; // libraryDetailCtrl

  libraryDetailCtrl.$inject = ['$scope', '$http', '$stateParams'];

  angular
    .module('angularApp')
    .controller('libraryDetailCtrl', libraryDetailCtrl);

})();
