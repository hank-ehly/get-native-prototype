(function() {
  'use strict';

  var cueVideosTable = function(Cue, Flash, $auth) {
    
    return {

      restrict: 'E',
      templateUrl: 'shared/cueVideosTable/cueVideosTableTemplate.html',

      link: function($scope, iElm, iAttrs, controller) { // jshint ignore:line

        $scope.uneditable = 'uneditable' in iAttrs ? true : false;

        // ----------------------------------
        
        function removeFromCue(video, index) {

          if (!confirm('Delete this video from your playlist?')) { // jshint ignore:line
            return false;
          }

          /*
           * This is triggered when the video you removed
           * is the same one that is currently selected
           */

          if ($scope.selectedCueVideo.code === video.code) {

          /*
           * Because we're deleting the currently selected video,
           * we have to decide what to select after removing it
           */

            var nextSelection;

            if ($scope.cueVideos.length > 1) {

            /*
             * If it's the first video in the list,
             * select the video after it.
             * Otherwise, select the video before it.
             */

              nextSelection = (index === 0) ? 1 : index - 1;
              $scope.selectCueVideo($scope.cueVideos[nextSelection]);

            } else {
              // **************** FIX
              $scope.selectedCueVideo = null;
            }
            
          } // if

          /*
           * Remove the actual video from the Cue, 
           * and splice it from the view
           */
          
          Cue.resource.removeFromCue({user_id: $auth.user.id, video_id: video.id}, function(res) {

            $scope.cueVideos.splice(index, 1);
            Flash.create('success', res.notice);

          }, function(res) { console.log('Error', res); });

        } // end removeFromCue


        // ----------------------------------

        $scope.removeFromCue  = removeFromCue;

      }
    };
  };

  angular
    .module('angularApp')
    .directive('cueVideosTable', cueVideosTable);

  cueVideosTable.$inject = ['Cue', 'Flash', '$auth'];

})();
