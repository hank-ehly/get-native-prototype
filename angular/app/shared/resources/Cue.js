(function() {
  'use strict';

  var Cue = function($resource, apiBaseUrl, Video, Collocation, $q) {

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

    function getVideoError (res) { console.log('Error', res); }
    function getCueError   (res) { console.log('Error', res); }
    function getColError   (res) { console.log('Error', res); }

    function initializeContents(userId, langModId, selectedVideo) {

      var deferred = $q.defer();

      this.resource.get({ user_id: userId, language_module_id: langModId }, function(res) { // jshint ignore:line

        // this is the object you return to the controller
        var data = {};

        data.cueVideos = angular.fromJson(res.videos);

        if (data.cueVideos.length) {

          data.selectedVideo = selectedVideo ? selectedVideo : data.cueVideos[0];

          Video.resource.get({ id: data.selectedVideo.id }, function (res) {

            data.video   = angular.fromJson(res.video);

            data.scripts = angular.fromJson(res.video_scripts);
            data.tabs    = [];

            angular.forEach(data.scripts, function(s) {

              var vs     = {};
              vs.id      = s.id;
              vs.title   = s.language.name;
              vs.content = s.content;

              if (s.original) {

                vs.active = true;

                Collocation.resource.get({ video_script_id: vs.id }, function (res) {

                  data.collocations = angular.fromJson(res.collocations);

                  // wraps in <span> tags and give 'collocation' class
                  vs.content = Collocation.wrap(vs.content, data.collocations, 'span', 'collocation');

                  // initialize values for collocation panel
                  data.selectedQuote       = '...';
                  data.selectedDescription = 'Select a collocation from the above script!';

                  deferred.resolve(data);

                }, getColError);
              } // if s.original

              data.tabs.push(vs);

            }); // each
          }, getVideoError);

        } // if data.cueVideos.length
      }, getCueError); // jshint ignore:line
      
      return deferred.promise;
      
    }

    // ------------------------
        
  	          url = apiBaseUrl + '/cues/:id.json';
    paramDefaults = { id: '@id' };
          actions = { 
              save: { method: 'POST' },
            update: { method: 'PUT' },
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
