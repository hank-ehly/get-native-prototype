(function() {
  'use strict';

  var userHomeCtrl = function($scope, $rootScope, Video, Collocation, Cue) {

    var currentUser = $rootScope.user;

    /*
     * This is the code that sets up the user collocation video,
     * tabs, collocations, and other things. It is very important.
     * The bulk of it can be found in 'Cue'
     */
    
    function initSuccess(data) {

      $scope.cueVideos            = data.cueVideos;
      $scope.selectedCueVideo     = data.selectedVideo;
      $scope.tabs                 = data.tabs;
      $scope.video                = data.video;
      $scope.selectedQuote        = data.selectedQuote;
      $scope.selectedDescription  = data.selectedDescription;
      $scope.collocations         = data.collocations;

    }

    function initError(res) { console.log('Error', res); }
    Cue.initializeContents(currentUser.id, 21).then(initSuccess, initError);


    /*
     * This function is called when a user clicks on a new video.
     * Its' main purpose is to execute 'getVideoSuccess,' but it
     * also serves to set the next video in the panel
     */

    $scope.selectCueVideo = function(cv) { Cue.initializeContents(currentUser, 21, cv).then(initSuccess, initError); };
    

  }; // end userHomeCtrl

  userHomeCtrl.$inject = ['$scope', '$rootScope', 'Video', 'Collocation', 'Cue'];

  angular
    .module('angularApp')
    .controller('userHomeCtrl', userHomeCtrl);

})();
