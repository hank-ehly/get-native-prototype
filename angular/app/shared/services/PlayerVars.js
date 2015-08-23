(function() {
  'use strict';

  var PlayerVars = function() {

    var service = {};

    service.listening = {
      controls: 0,
      modestbranding: 1,
      showinfo: 0,
      autoplay: 1
    };

    service.shadowing = service.listening;

    service.libraryDetail = {
      controls: 1,
      modestbranding: 1,
      showinfo: 0
    };

    return service;

  };

  angular
    .module('angularApp')
    .factory('PlayerVars', PlayerVars);

  PlayerVars.$inject = [];

})();
