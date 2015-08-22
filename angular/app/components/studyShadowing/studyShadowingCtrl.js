(function() {
  'use strict';

  var studyShadowingCtrl = function($scope, $stateParams, Video, Collocation, $state) {






  		  	function getVideoSuccess(res) {

  		$scope.video = angular.fromJson(res.video);
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
          videoScript.active    = true;
          videoScript.original  = true;

          // get collocations for this videoScript
          Collocation.resource.get({ video_script_id: vs.id }, function(res) {

            // group the collocations so that you can wrap them
            $scope.collocations = angular.fromJson(res.collocations);

            // wrap in <span> tags
            videoScript.content = Collocation.wrap(vs.content, $scope.collocations, 'span', 'collocation');

            // initialize collocation panel
            $scope.selectedCollocationQuote = '...';
            $scope.selectedCollocationDescription = 'Select a collocation from the above script!';

          });

          // only push original video
          $scope.tabs.push(videoScript);

        } // if video script is original

      }); // forEach



  	}

    // video player settings
    $scope.playerVars = {
            controls: 0,
      modestbranding: 1,
            showinfo: 0,
            autoplay: 1
    };

    // the 'loop' setting doesn't work, so you gotta LOOP manually
    $scope.$on('youtube.player.ended', function (e, player) { player.playVideo(); });

    // start the video and timer at the same time
    $scope.$on('youtube.player.ready', function () { $scope.$broadcast('timer-start'); });

  	function getVideoFailure(res) { console.log('Error', res); }

  	Video.resource.get({ id: parseInt($stateParams.videoId) }, getVideoSuccess, getVideoFailure);

  	// $scope.studyTime = (($stateParams.time / 4) * 60);
  	$scope.studyTime = 5;



  	/**
  	 *
  	 * timer up callback
  	 *
  	 */
  	
  	$scope.finished = function() {

  		$scope.studyShadowingPlayer.pauseVideo();

  		console.log('redirecting in 3 seconds');

  		setTimeout(function(){
  			console.log('redirecting now');
  			$state.go('studySpeaking', {
  				videoId: $stateParams.videoId,
  				time: $stateParams.time
  			});
  		}, 3000);
  	};

  	$scope.timerRunning = true;
 
    $scope.resumeTimer = function (){
        $scope.$broadcast('timer-resume');
        $scope.timerRunning = true;
    };

    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };













  };

  studyShadowingCtrl.$inject = ['$scope', '$stateParams', 'Video', 'Collocation', '$state'];

  angular
    .module('angularApp')
    .controller('studyShadowingCtrl', studyShadowingCtrl);

})();
