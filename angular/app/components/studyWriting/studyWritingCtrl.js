(function() {
  'use strict';

  var studyWritingCtrl = function($scope, $rootScope, $state, $stateParams, $modal, Video, WritingAnswer, Collocation) {

    var topic;
  	$scope.wordCount = 0;

    function getCSuccess(res) {
      $scope.collocations = res.collocations;
    }

    Collocation.resource.get({video_id: $stateParams.v, original: true}, getCSuccess, function(r){console.log(r);});



  	$scope.countWords = function(e){
			var s = e.target.value;
      //if ($stateParams.lang == 'Japanese')
      //{
        $scope.wordCount = s.length;
      //}
      //else
      //{
      //   //英語の場合以下を使うのregexを使用
      //   s = s.replace(/(^\s*)|(\s*$)/gi,'');
      //   s = s.replace(/[ ]{2,}/gi,' ');
      //   s = s.replace(/\n /,'\n');
      //   $scope.wordCount = s.split(' ').length;
      //}
		};

    // window.onbeforeunload = function(e) { return 'By refreshing the page you will reset the clock!'; }

    Video.fetch('writing_prompts', $stateParams.v).then(function(res) {

      var arr = res.resource;

      topic = res.topic;

      if (!arr[0]) {
        $scope.prompt = 'none';
        $scope.example = 'none';
      } else {

        // you should do randomization here
        $scope.prompt = arr[0].prompt;
        $scope.example = arr[0].example;

      }

    }, function(res) {
      console.log('Error', res);

    });


    // --------------- MODAL

    function open() {

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'components/studyWriting/modalTemplate.html',
        controller: 'modalCtrl',
        resolve: {
          answer: function() {
            return document.getElementById('writingAnswer').value;
          }
        }
      });

      modalInstance.result.then(function(){

        var wa = {
          'writing_answer': {
            'language_module_id': $stateParams.lm,
            'writing_answer': document.getElementById('writingAnswer').value,
            'topic_id': topic.id
          }
        };

        // save
        WritingAnswer.resource.save(wa, function(res) {
          console.log('success', res);
        }, function(res) {
          console.log('Error', res);
        });

        $state.go('userHome');

      }, function() {

        // dont save
        $state.go('userHome');

      });

    }

  	// ------------------- TIMER

  	$scope.studyTime = (($stateParams.t / 4) * 60);
    // $scope.studyTime = 3;

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

      open();

  		// console.log('redirecting in 3 seconds');

  		// setTimeout(function(){
  		// 	console.log('redirecting to userHome');
  		// 	$state.go('userHome');
  		// }, 3000);

  	};

  	// ------------- END TIMER




  };

  studyWritingCtrl.$inject = ['$scope', '$rootScope', '$state', '$stateParams', '$modal', 'Video', 'WritingAnswer', 'Collocation'];

  angular
    .module('angularApp')
    .controller('studyWritingCtrl', studyWritingCtrl);

})();
