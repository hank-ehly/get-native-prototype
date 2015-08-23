(function() {
  'use strict';

  var userHomeCtrl = function($scope, $rootScope, Video, Collocation, Cue, LanguageModule, $location) {

    var currentUser = $rootScope.user;
    var languageModule;

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

    function getLMSuccess(res) {

      languageModule = res.languageModule[0];

      Cue.initializeContents(currentUser.id, languageModule.id).then(initSuccess, initError);

    }

    function getLMError(res) { console.log('Error', res); }

    LanguageModule.resource.get({ user_id: $rootScope.user.id, language: $scope.selectedLanguage }, getLMSuccess, getLMError);

    $scope.$on('changeLanguage', function() {
      LanguageModule.resource.get({ user_id: $rootScope.user.id, language: $location.search().lang }, getLMSuccess, getLMError);      
    });
    

    /*
     * This function is called when a user clicks on a new video.
     * Its' main purpose is to execute 'getVideoSuccess,' but it
     * also serves to set the next video in the panel
     */

    $scope.selectCueVideo = function(cv) { Cue.initializeContents(currentUser, languageModule.id, cv).then(initSuccess, initError); };
    
  }; // end userHomeCtrl

  userHomeCtrl.$inject = ['$scope', '$rootScope', 'Video', 'Collocation', 'Cue', 'LanguageModule', '$location'];

  angular
    .module('angularApp')
    .controller('userHomeCtrl', userHomeCtrl);

})();
