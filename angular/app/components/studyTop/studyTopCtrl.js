(function() {
  'use strict';

  var studyTopCtrl = function($scope, Cue, $rootScope, LanguageModule, $location) {

    function getCueSuccess(res) {

      // unpack cue.videos object
      $scope.cueVideos = angular.fromJson(res.videos);

      // We don't wanna try loading videos
      // if there aren't any in our cue
      if ($scope.cueVideos.length) {

        // Display the first cue video in the panel.
        // Query for that video so we can populate the panel with video scripts and collocations!
        $scope.selectedCueVideo = $scope.cueVideos[0];  
        // Video.resource.get({ id: parseInt($scope.selectedCueVideo.id) }, getVideoSuccess, getVideoError);

      }
    }

    function getCueFailure (res) { console.log('Error', res); }
    function getLMError(res) { console.log('Error', res); }

    function getLMSuccess(res) {

      $scope.languageModule = res.languageModule[0];
      Cue.resource.get({user_id: $rootScope.user.id, language_module_id: $scope.languageModule.id}, getCueSuccess, getCueFailure);

    }

    // start
    LanguageModule.resource.get({ user_id: $rootScope.user.id, language: $scope.selectedLanguage }, getLMSuccess, getLMError);

    $scope.$on('changeLanguage', function() {
      LanguageModule.resource.get({ user_id: $rootScope.user.id, language: $location.search().lang }, getLMSuccess, getLMError);      
    });



    function selectCueVideo(cv) {
    	$scope.selectedCueVideo = cv;
    }

    $scope.time = 15;
    function increase() { $scope.time < 25 ? $scope.time ++ : false; } // jshint ignore:line
    function decrease() { $scope.time > 5  ? $scope.time -- : false; } // jshint ignore:line

    $scope.decrease 			= decrease;
    $scope.increase 			= increase;
    $scope.selectCueVideo = selectCueVideo;

  };

  studyTopCtrl.$inject = ['$scope', 'Cue', '$rootScope', 'LanguageModule', '$location'];

  angular
    .module('angularApp')
    .controller('studyTopCtrl', studyTopCtrl);

})();
