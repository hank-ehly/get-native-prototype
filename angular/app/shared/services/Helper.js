(function(){
	'use strict';

	var Helper = function() {

		function hasClass(element, className) {
			var elementClassName 	= ' ' + element.className + ' ';
			var searchClass 			= ' ' + className + ' ';
			return (elementClassName).replace(/[\t\r\n\f]/g, ' ').indexOf(searchClass) > -1 ? true : false;
		}

		var service = {
			hasClass: hasClass
		};

		return service;

	};

	angular
		.module('angularApp')
		.factory('Helper', Helper);

	Helper.$inject = [];

})();