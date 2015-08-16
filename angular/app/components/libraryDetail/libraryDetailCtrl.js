(function() {
  'use strict';

  var libraryDetailCtrl = function($scope, $http, $stateParams, Video, Collocation) {

    /*
    *
    * You're doing a lot of stuff here. Let's walk through it..
    * 
    * 1 / Query for videos. Video scripts are included in the JSON response object
    * 2 / Setup an empty tabs array. We will dynamically fill it with our videoScript content
    * 3 / Iterate over the videoScripts, create a new videoScript object
    * 4 / If the video is the original, be a boss and do the following:
    *   4.1 / Mark the original videoScript as active (so it is selected on page load)
    *   4.2 / Query the collocation with videoScript id
    *   4.3 / Within the original videoScript, wrap each collocation in a 'span' tag and give it a class name
    * 5 / Push the new videoScript object into the tabs array
    *
    */
    
    Video.get({ id: parseInt($stateParams.videoId) }, function(res) {

      // initialization
      $scope.video      = angular.fromJson(res.video);
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
          videoScript.active = true;

          // query for collocations from this videoScript
          Collocation.get({ video_script_id: vs.id }, function(res) { // jshint ignore:line

            // wrap the collocation
            videoScript.content = wrapCollocations(vs.content, angular.fromJson(res.collocations), 'span', 'highlight');

          });

        }

        $scope.tabs.push(videoScript);

      });

    }); // Video.get()


    // this is a boss function
    // (and it shouldn't be in this controller!)
    function wrapCollocations(script, collocations, tag, className) {

      var result = script;

      angular.forEach(collocations, function(c) {

        var quote,
            start,
            end,
            substr,
            newSub;

        // initialize variables
        quote   = c.quote;
        start   = result.indexOf(quote);
        end     = start + quote.length;
        substr  = result.substring(start, end);

        // assemble replacement string
        newSub  = '<' + tag;
        newSub += ' class="' + className + '"';
        newSub += '>';
        newSub +=  substr;
        newSub += '</' + tag + '>';

        // do the replacement
        result  = result.replace(substr, newSub);
        
      });

      return result;

    } // wrapCollocations


    // video player settings
    $scope.playerVars = {
      controls: 1,
      modestbranding: 1,
      showinfo: 0
    };


  }; // end of libraryDetailCtrl

  libraryDetailCtrl.$inject = ['$scope', '$http', '$stateParams', 'Video', 'Collocation'];

  angular
    .module('angularApp')
    .controller('libraryDetailCtrl', libraryDetailCtrl);

})();
