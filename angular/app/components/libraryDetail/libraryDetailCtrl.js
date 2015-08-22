(function() {
  'use strict';

  var libraryDetailCtrl = function($scope, $rootScope, $http, $stateParams, Video, Collocation, Cue, User, Flash, Announce) {


    function setVideoSuccess(res) {

      $scope.video                = res.video;
      $scope.tabs                 = res.tabs;
      $scope.collocations         = res.collocations;
      $scope.selectedQuote        = res.selectedQuote;
      $scope.selectedDescription  = res.selectedDescription;

      // see if video is already in one of user's cues
      User.resource.hasVideo({user_id: $rootScope.user.id, video_id: $scope.video.id}, function(res) {
        $scope.alreadyInCue = res.result;
      }, function(res) { console.log('Error', res); });

    }

    function setVideoError(res) { console.log('Error', res); }
    Video.setVideo($stateParams.videoId).then(setVideoSuccess, setVideoError);


    // video player settings
    $scope.playerVars = {
            controls: 1,
      modestbranding: 1,
            showinfo: 0
    };


    // add to cue
    function addToCue(user, video) {

      Cue.resource.get({user_id: user.id}, function(res) {

        var c   = angular.fromJson(res.cues);
        var cue = c[0];
        

        Cue.resource.addVideoToCue({cue_id: cue.id, video_id: video.id}, function() {

          Flash.create('success', Announce.addToCueSuccess);
          $scope.alreadyInCue = true;

        }, function(res) {
          console.log('error', res);
        });

      }, function(res) {
        console.log('error', res);
      });
      
    }

    function removeFromCue(user, video) {

      Cue.resource.removeFromCue({user_id: user.id, video_id: video.id}, function(res) {
        Flash.create('success', res.notice);
        $scope.alreadyInCue = false;
      }, function(res) {
        console.log('error not removed', res);
      });

    }


    $scope.removeFromCue = removeFromCue;
    $scope.addToCue      = addToCue;


  }; // end of libraryDetailCtrl

  libraryDetailCtrl.$inject = ['$scope', '$rootScope', '$http', '$stateParams', 'Video', 'Collocation', 'Cue', 'User', 'Flash', 'Announce'];

  angular
    .module('angularApp')
    .controller('libraryDetailCtrl', libraryDetailCtrl);

})();
