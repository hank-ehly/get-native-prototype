(function() {
  'use strict';

  var libraryDetailCtrl = function($scope, $http, $stateParams, Video, Collocation, Cue) {

    /*
    *
    * You're doing a lot of stuff here. Let's walk through it..
    * 
    * 1 / Query for videos. Video scripts are included in the JSON response object
    * 2 / Setup an empty tabs array. We will dynamically fill it with our videoScript content
    * 3 / Iterate over the videoScripts, create a new videoScript object
    * 4 / If the video is the original, be a boss and do the following:
    *   4.1 / Mark the original videoScript as active (so it is selected on page load)
    *   4.2 / Query the collocation with videoScript id
    *   4.3 / Within the original videoScript, wrap each collocation in a 'span' tag and give it a class name
    * 5 / Push the new videoScript object into the tabs array
    *
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

    function getVideoError(res) {
      console.log(res);
    }

    Video.get({ id: parseInt($stateParams.videoId) }, getVideoSuccess, getVideoError);

    // video player settings
    $scope.playerVars = {
      controls: 1,
      modestbranding: 1,
      showinfo: 0
    };


    // add to cue
    $scope.addToCue = function(user, video) {

      Cue.resource.get({user_id: user.id}, function(res) {
        console.log('success', res);

        var c = angular.fromJson(res.cues);
        var cue = c[0];
        // console.log(video);
        Cue.resource.addVideoToCue({cue_id: cue.id, video_id: video.id}, function(res) {
          console.log('success', res);
        }, function(res) {
          console.log('error', res);
        });

      }, function(res) {
        console.log('error', res);
      });

      
    }


  }; // end of libraryDetailCtrl

  libraryDetailCtrl.$inject = ['$scope', '$http', '$stateParams', 'Video', 'Collocation', 'Cue'];

  angular
    .module('angularApp')
    .controller('libraryDetailCtrl', libraryDetailCtrl);

})();
