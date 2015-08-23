(function() {
  'use strict';

  var libraryDetailCtrl = function($scope, $auth, $http, $stateParams, Video, Collocation, Cue, User, Flash, Announce, PlayerVars) {

    var cue;

    function setVideoSuccess(res) {

      $scope.video                = res.video;
      $scope.tabs                 = res.tabs;
      $scope.collocations         = res.collocations;
      $scope.selectedQuote        = res.selectedQuote;
      $scope.selectedDescription  = res.selectedDescription;

      // see if video is already in one of user's cues
      // also set the cue for the $scope
      User.resource.hasVideo({user_id: $auth.user.id, video_id: $scope.video.id}, function(res) {

        $scope.alreadyInCue = res.result;
        cue = res.cue;

      }, function(res) { console.log('Error', res); });

    }

    function setVideoError(res) { console.log('Error', res); }
    Video.setVideo($stateParams.videoId).then(setVideoSuccess, setVideoError);


    // video player settings
    $scope.playerVars = PlayerVars.libraryDetail;


    function addToCue(video) {

      Cue.resource.addVideoToCue({cue_id: cue.id, video_id: video.id}, function() {
        Flash.create('success', Announce.addToCueSuccess);
        $scope.alreadyInCue = true;
      }, function(res) { console.log('Error', res); });
    }

    function removeFromCue(video) {

      Cue.resource.removeFromCue({user_id: $auth.user.id, video_id: video.id}, function(res) {
        Flash.create('success', res.notice);
        $scope.alreadyInCue = false;
      }, function(res) { console.log('error not removed', res); });
    }

    $scope.removeFromCue = removeFromCue;
    $scope.addToCue      = addToCue;

  }; // end of libraryDetailCtrl

  libraryDetailCtrl.$inject = ['$scope', '$rootScope', '$http', '$stateParams', 'Video', 'Collocation', 'Cue', 'User', 'Flash', 'Announce', 'PlayerVars'];

  angular
    .module('angularApp')
    .controller('libraryDetailCtrl', libraryDetailCtrl);

})();
