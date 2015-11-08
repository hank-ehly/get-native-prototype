(function() {
  'use strict';

  var Cue;
  Cue = function ($resource, apiBaseUrl, Video, Collocation, $q) {

    var url,
      paramDefaults,
      actions,
      addVideoToCue,
      removeFromCue;

    // ------------------------

    addVideoToCue = {
      method: 'POST',
      url: apiBaseUrl + '/add_video_to_cue/:cue_id/:video_id.json',
      params: {
        cue_id: '@cue_id',
        video_id: '@video_id'
      }
    };

    removeFromCue = {
      method: 'DELETE',
      url: apiBaseUrl + '/remove_video_from_cue/:user_id/:video_id.json',
      params: {
        cue_id: '@user_id',
        video_id: '@video_id'
      }
    };

    function getCueError(res) {
      console.log('Error', res);
    }

    function setVideoError(res) {
      console.log('Error', res);
    }

    function initializeContents(userId, langModId, selectedVideo, shouldWrapCollocations) {

      var deferred = $q.defer();

      this.resource.get({user_id: userId, language_module_id: langModId}, function (res) { // jshint ignore:line

        // this is the object you return to the controller
        var data = {};

        data.cueVideos = angular.fromJson(res.videos);

        if (data.cueVideos.length) {

          data.selectedVideo = selectedVideo ? selectedVideo : data.cueVideos[0];


          Video.setVideo(data, shouldWrapCollocations).then(function (res) {

            data.video = res.video;
            data.scripts = res.scripts;
            data.tabs = res.tabs;
            data.collocations = res.collocations;
            data.selectedQuote = res.selectedQuote;
            data.selectedDescription = res.selectedDescription;

            deferred.resolve(data);

          }, setVideoError);
        } else {
          // redirects to lang mod even if it doesn't have videos
          deferred.resolve(data);
        }

      }, getCueError);

      return deferred.promise;

    }

    // ------------------------

    url = apiBaseUrl + '/cues/:id.json';
    paramDefaults = {id: '@id'};
    actions = {
      save: {method: 'POST'},
      update: {method: 'PUT'},
      addVideoToCue: addVideoToCue,
      removeFromCue: removeFromCue
    };

    return {
      resource: $resource(url, paramDefaults, actions),
      initializeContents: initializeContents
    };

  };

  angular
  	.module('angularApp')
  	.factory('Cue', Cue);

  Cue.$inject = ['$resource', 'apiBaseUrl', 'Video', 'Collocation', '$q'];

})();
