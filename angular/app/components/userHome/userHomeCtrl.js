(function() {
  'use strict';

  var userHomeCtrl = function($scope, Video, Collocation, Cue) {

    


    Cue.resource.get({user_id: 41, language_module_id: 21}, function(res) { // jshint ignore:line
      console.log('success', res);
      $scope.cueVideos = angular.fromJson(res.videos);
      console.log($scope.cueVideos);

      $scope.selectedCueVideo = $scope.cueVideos[0].id;

      Video.resource.get({ id: parseInt($scope.selectedCueVideo) }, getVideoSuccess, getVideoError);


    }, function(res) {
      console.log('fail', res);
    });
    



$scope.selectCueVideo = function(cv) {
  // $scope.selectedCueVideo = cv.
  // console.log(cv);

  $scope.selectedCueVideo = cv.id;

  Video.resource.get({ id: parseInt($scope.selectedCueVideo) }, getVideoSuccess, getVideoError);

};




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

    










  };

  userHomeCtrl.$inject = ['$scope', 'Video', 'Collocation', 'Cue'];

  angular
    .module('angularApp')
    .controller('userHomeCtrl', userHomeCtrl);

})();
