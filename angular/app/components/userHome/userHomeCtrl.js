(function() {
  'use strict';

  var userHomeCtrl = function($scope, Video, Collocation) {

    











function getVideoSuccess(res) {

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

          // get collocations for this videoScript
          Collocation.resource.get({ video_script_id: vs.id }, function(res) { // jshint ignore:line

            // group the collocations so that you can wrap them
            $scope.collocations = angular.fromJson(res.collocations);

            // wrap in <span> tags
            videoScript.content = Collocation.wrap(vs.content, $scope.collocations, 'span', 'collocation');

            // initialize collocation panel
            $scope.selectedCollocationQuote = '...';
            $scope.selectedCollocationDescription = 'Select a collocation from the above script!';

          });

        } // if video script is original

        $scope.tabs.push(videoScript);

      }); // forEach

    } // getVideoSuccess

    function getVideoError(res) {
      console.log(res);
    }

    Video.get({ id: parseInt(1) }, getVideoSuccess, getVideoError);










  };

  userHomeCtrl.$inject = ['$scope', 'Video', 'Collocation'];

  angular
    .module('angularApp')
    .controller('userHomeCtrl', userHomeCtrl);

})();
