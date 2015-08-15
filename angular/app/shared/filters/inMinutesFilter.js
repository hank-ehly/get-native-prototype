(function() {
  'use strict';

  var inMinutes = function() {
    return function(lengthInSeconds) {

      /*
       * This filter takes an int value
       * which is considered 'seconds.'
       * It returns a string with the format
       * 1:30 // 2:11 // 1:52
       */

      var minutes,
          seconds,
          result;

      // format minutes & seconds
      minutes = Math.floor(lengthInSeconds / 60);
      seconds = lengthInSeconds % 60;

      // if seconds only contains 1 digit, 
      // append a zero for formatting purposes
      if (seconds.toString().length < 2) {
        seconds += '0';
      }

      // assemble the result string
      result = minutes + ':' + seconds;

      return result;

    };
  };

  angular
    .module('angularApp')
    .filter('inMinutes', inMinutes);

  inMinutes.$inject = [];

})();
