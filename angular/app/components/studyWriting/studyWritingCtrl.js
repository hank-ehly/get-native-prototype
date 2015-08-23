(function() {
  'use strict';

  var studyWritingCtrl = function($scope, $state, $stateParams) {

  	$scope.test = 'foostudyWriting';

  	$scope.prompt = 'This is the prompt question';

  	$scope.wordCount = 0;

  	$scope.countWords = function(e){
			var s = e.target.value;
			s = s.replace(/(^\s*)|(\s*$)/gi,"");
			s = s.replace(/[ ]{2,}/gi," ");
			s = s.replace(/\n /,"\n");
			$scope.wordCount = s.split(' ').length;
		}

    // window.onbeforeunload = function(e) { return 'By refreshing the page you will reset the clock!'; }

    $scope.example = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id maiores, architecto velit! Illo pariatur neque nam ab fugit, voluptas. Eligendi doloribus cupiditate dolore maxime vitae minus placeat vel aperiam!';


  	// ------------------- TIMER

  	// $scope.studyTime = (($stateParams.time / 4) * 60);
    $scope.studyTime = 5;

    $scope.timerRunning = true; 
    $scope.resumeTimer = function (){
        $scope.$broadcast('timer-resume');
        $scope.timerRunning = true;
    };
    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

    $scope.finished = function() {

  		console.log('redirecting in 3 seconds');

  		setTimeout(function(){
  			console.log('redirecting to writing');
  			$state.go('studyWriting', {
  				videoId: $stateParams.videoId,
  				time: $stateParams.time
  			});
  		}, 3000);

  	}; 

  	// ------------- END TIMER




  };

  studyWritingCtrl.$inject = ['$scope', '$state', '$stateParams'];

  angular
    .module('angularApp')
    .controller('studyWritingCtrl', studyWritingCtrl);

})();
