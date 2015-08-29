(function() {
  'use strict';

  var userHomeCtrl = function($scope, $rootScope, Video, Collocation, Cue, LanguageModule, $location, WritingAnswer, PlayerVars) {

    var currentUser = $rootScope.user;
    var languageModule;
    $scope.playerVars = PlayerVars.userHome;

    /*
     * This is the code that sets up the user collocation video,
     * tabs, collocations, and other things. It is very important.
     * The bulk of it can be found in 'Cue'
     */
    
    function initSuccess(data) {

      angular.forEach(data.cueVideos, function(cv) {
        cv.thumbnailUrl = 'http://i1.ytimg.com/vi/' + cv.code + '/default.jpg';
      });

      $scope.cueVideos            = data.cueVideos;
      $scope.selectedCueVideo     = data.selectedVideo;
      $scope.tabs                 = data.tabs;
      $scope.video                = data.video;
      $scope.selectedQuote        = data.selectedQuote;
      $scope.selectedDescription  = data.selectedDescription;
      $scope.collocations         = data.collocations;

    }

    function getWASuccess(res) {

      var wa = angular.fromJson(res.writing_answers);

      if (!wa.length) {
        $scope.noWritingAnswers = true;
      } else {
        $scope.noWritingAnswers = false;
        $scope.writingAnswers = wa;
      }

    }

    function getLMSuccess(res) {

      languageModule = res.languageModule[0];

      WritingAnswer.resource.get({ language_module_id: languageModule.id }, getWASuccess, function(r){ console.log(r);});
      Cue.initializeContents(currentUser.id, languageModule.id, null, true).then(initSuccess, function(r){console.log(r);});

    }

    LanguageModule.resource.get({ user_id: $rootScope.user.id, language: $scope.selectedLanguage }, getLMSuccess, function(r){console.log(r);});

    $scope.$on('changeLanguage', function() {
      LanguageModule.resource.get({ user_id: $rootScope.user.id, language: $location.search().lang }, getLMSuccess, function(r){console.log(r);});      
    });
    

    /*
     * This function is called when a user clicks on a new video.
     * Its' main purpose is to execute 'getVideoSuccess,' but it
     * also serves to set the next video in the panel
     */

    $scope.selectCueVideo = function(cv) { Cue.initializeContents(currentUser, languageModule.id, cv, true).then(initSuccess, function(r){console.log(r);});};
    
  }; // end userHomeCtrl

  userHomeCtrl.$inject = ['$scope', '$rootScope', 'Video', 'Collocation', 'Cue', 'LanguageModule', '$location', 'WritingAnswer', 'PlayerVars'];

  angular
    .module('angularApp')
    .controller('userHomeCtrl', userHomeCtrl);

})();
