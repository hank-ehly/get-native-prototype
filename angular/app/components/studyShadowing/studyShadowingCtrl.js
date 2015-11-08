(function() {
  'use strict';

  var studyShadowingCtrl = function($scope, $stateParams, Video, Collocation, $state, PlayerVars) {

    function setVideoSuccess(res) {
      $scope.video                = res.video;
      //$scope.tabs                 = res.tabs;
      $scope.collocations         = res.collocations;
      $scope.selectedQuote        = res.selectedQuote;
      $scope.selectedDescription  = res.selectedDescription;
    }

    function setVideoError(res) { console.log('Error', res); }
    Video.setVideo($stateParams.v).then(setVideoSuccess, setVideoError);

    $scope.playerVars = PlayerVars.shadowing;

    // the 'loop' setting doesn't work, so you gotta LOOP manually
    // start the video and timer at the same time
    $scope.$on('youtube.player.ended', function (e, player) { player.playVideo(); });
    $scope.$on('youtube.player.ready', function () { $scope.$broadcast('timer-start'); });

    $scope.studyTime = (($stateParams.t / 4) * 60);
    // $scope.studyTime = 5;

    $scope.timerRunning = true;
    $scope.resumeTimer = function (){
        $scope.$broadcast('timer-resume');
        $scope.timerRunning = true;
    };
    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

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
  				v: $stateParams.v,
          lm: $stateParams.lm,
  				t: $stateParams.t
  			});
  		}, 3000);
  	};

  };

  studyShadowingCtrl.$inject = ['$scope', '$stateParams', 'Video', 'Collocation', '$state', 'PlayerVars'];

  angular
    .module('angularApp')
    .controller('studyShadowingCtrl', studyShadowingCtrl);

})();
