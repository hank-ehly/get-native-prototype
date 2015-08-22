(function() {
  'use strict';

  var userHomeCtrl = function($scope, $rootScope, Video, Collocation, Cue, Flash) {

    function getCueSuccess(res) {

      // unpack cue.videos object
      $scope.cueVideos = angular.fromJson(res.videos);

      // We don't wanna try loading videos
      // if there aren't any in our cue
      if ($scope.cueVideos.length) {

        // Display the first cue video in the panel.
        // Query for that video so we can populate the panel with video scripts and collocations!
        $scope.selectedCueVideo = $scope.cueVideos[0];  
        Video.resource.get({ id: parseInt($scope.selectedCueVideo.id) }, getVideoSuccess, getVideoError);

      }
    }

    function getCueFailure (res) { console.log('Error', res); }

    Cue.resource.get({user_id: $rootScope.user.id, language_module_id: 21}, getCueSuccess, getCueFailure);

    

    /*
     * This function is called when a user clicks on a new video.
     * Its' main purpose is to execute 'getVideoSuccess,' but it
     * also serves to set the next video in the panel
     */

    function selectCueVideo(cv) {

      $scope.selectedCueVideo = cv;

      if (cv === null) {
        // do something
      }

      Video.resource.get({ id: parseInt($scope.selectedCueVideo.id) }, getVideoSuccess, getVideoError);

    }


    /*
     * This function is called when a Video record has been successfully
     * retrieved from the DB. It finds all the related content (collocations, video script)
     */

    function getVideoSuccess(res) {

      // initialization
      $scope.video      = angular.fromJson(res.video);
      var videoScripts  = angular.fromJson(res.video_scripts); // jshint ignore:line
      $scope.tabs       = [];

      // iterate over videoScripts
      angular.forEach(videoScripts, function(vs) {

        // create videoScript object for bootstrap tab directive
        var videoScript = {
          title: vs.language.name,
          content: vs.content
        };

        if (vs.original) {

          // set initially active tab
          videoScript.active = true;

          // get collocations for this videoScript
          Collocation.resource.get({ video_script_id: vs.id }, function(res) { // jshint ignore:line

            // group the collocations so that you can wrap them
            $scope.collocations = angular.fromJson(res.collocations);

            // wrap in <span> tags
            videoScript.content = Collocation.wrap(vs.content, $scope.collocations, 'span', 'collocation');

            // initialize collocation panel
            $scope.selectedCollocationQuote = '...';
            $scope.selectedCollocationDescription = 'Select a collocation from the above script!';

          });

        } // if video script is original

        $scope.tabs.push(videoScript);

      }); // forEach

    } // getVideoSuccess

    function getVideoError(res) { console.log('Error', res); }

    
    /*
     * This function is called when the user clicks the 'remove' button next to a cue video.
     */
    
    function removeFromCue(video, user, index) {

      if (!confirm('Delete this video from your playlist?')) { // jshint ignore:line
        return false;
      }

      // This is triggered when the video you removed
      // is the same one that is currently selected
      if ($scope.selectedCueVideo === video) {

        // Because we're deleting the currently selected video,
        // we have to decide what to select after removing it
        var nextSelection;

        // If there is more than 1 video left in our cue when we click 'delete'
        if ($scope.cueVideos.length > 1) {

          // If it's the first video in the list,
          // select the video after it.
          // Otherwise, select the video before it.
          nextSelection = (index === 0) ? 1 : index - 1;

          $scope.selectCueVideo($scope.cueVideos[nextSelection]);

        } else {
          // **************** FIX
          $scope.selectedCueVideo = null;
        }
        
      } // end if

      // Remove the actual video from the Cue, and splice it from the view
      Cue.resource.removeFromCue({user_id: user.id, video_id: video.id}, function(res) {

        $scope.cueVideos.splice(index, 1);
        Flash.create('success', res.notice);

      }, function(res) {
        console.log('error not removed', res);
      });

    } // end removeFromCue
    
    $scope.selectCueVideo = selectCueVideo;
    $scope.removeFromCue  = removeFromCue;

  }; // end userHomeCtrl

  userHomeCtrl.$inject = ['$scope', '$rootScope', 'Video', 'Collocation', 'Cue', 'Flash'];

  angular
    .module('angularApp')
    .controller('userHomeCtrl', userHomeCtrl);

})();
