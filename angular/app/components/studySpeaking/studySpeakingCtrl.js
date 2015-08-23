(function() {
  'use strict';

  var studySpeakingCtrl = function($scope, $stateParams, Video) {

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

  	$scope.rotate = function() {
  		
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

  	};

  };

  studySpeakingCtrl.$inject = ['$scope', '$stateParams', 'Video'];

  angular
    .module('angularApp')
    .controller('studySpeakingCtrl', studySpeakingCtrl);

})();
