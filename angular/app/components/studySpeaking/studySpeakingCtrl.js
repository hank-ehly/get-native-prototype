(function() {
  'use strict';

  var studySpeakingCtrl = function($scope, $stateParams, Video, $state) {

  	Video.setVideo($stateParams.videoId).then(function(res){

				$scope.video                = res.video;
	      $scope.collocations         = res.collocations;
	      $scope.selectedQuote        = $scope.collocations[0].quote;
	      $scope.selectedDescription  = $scope.collocations[0].description;

	      $scope.originalTabs = [];
	      $scope.translatedTabs = [];

	      angular.forEach(res.tabs, function(tab) {

	      	if (tab.original) {
	      		$scope.originalTabs.push(tab);
	      	} else {
	      		$scope.translatedTabs.push(tab);
	      	}

	      });

	      $scope.translatedTabs[0].active = true;


  		}, function(res) {
  			console.log('Error', res);
  		});

  	$scope.colcount = 0;

  	$scope.next = function(shouldIncrement) {
  		
  		var len = $scope.collocations.length;
  		var next;

  		angular.forEach($scope.collocations, function(c) {

  			if (c.quote.indexOf($scope.selectedQuote) > -1) {

  				var isLast = $scope.collocations.indexOf(c) === len - 1 ? true : false;

  				next = isLast ? 0 : $scope.collocations.indexOf(c) + 1;

  			}

  		});
  		
  		$scope.selectedQuote 				= $scope.collocations[next].quote;
  		$scope.selectedDescription 	= $scope.collocations[next].description;

  		if (shouldIncrement) {
				$scope.colcount++;

	  		if ($scope.colcount >= $scope.collocations.length) {
	  			$scope.overachiever = true;
	  		}
  		}

  		
  	};

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

  };

  studySpeakingCtrl.$inject = ['$scope', '$stateParams', 'Video', '$state'];

  angular
    .module('angularApp')
    .controller('studySpeakingCtrl', studySpeakingCtrl);

})();
