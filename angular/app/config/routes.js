(function() {
  'use strict';

  /*
  *
  * How to add a component
  * ----------------------
  * 1) Add component name to 'components'
  * 2) Add state to $stateProvider
  * 
  */
  
  var components    = [],
      routes        = {},
      componentsDir = '';

  componentsDir = '../components/';

  // define components here
  components    = [ 
                    'contactUs', 
                    'faqs',
                    'libraryDetail',
                    'libraryTop',
                    'registration',
                    'siteTop',
                    'studyListening',
                    'studyShadowing',
                    'studySpeaking',
                    'studyTop',
                    'studyWriting',
                    'userAccount',
                    'userHome',
                    'userInterests'
                  ];

  for (var i = 0; i < components.length; i++) {

    Object.defineProperty(routes, components[i], {
      value: [
        componentsDir + components[i] + '/' + components[i] + '.html',
        components[i] + 'Ctrl'
      ]
    });

  }

  angular
    .module('angularApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      // add state for defined component
      $stateProvider
        .state('siteTop', {
          url: '/',
          templateUrl: routes.siteTop[0],
          controller: routes.siteTop[1],
        })
        .state('contactUs', {
          url: '/contactus',
          templateUrl: routes.contactUs[0],
          controller: routes.contactUs[1]
        })
        .state('faqs', {
          url: '/faqs',
          templateUrl: routes.faqs[0],
          controller: routes.faqs[1]
        })
        .state('libraryDetail', {
          url: '/libraryDetail/:videoId',
          templateUrl: routes.libraryDetail[0],
          controller: routes.libraryDetail[1]
        })
        .state('libraryTop', {
          url: '/libraryTop',
          templateUrl: routes.libraryTop[0],
          controller: routes.libraryTop[1]
        })
        .state('registration', {
          url: '/registration',
          templateUrl: routes.registration[0],
          controller: routes.registration[1]
        })
        .state('studyListening', {
          url: '/studyListening?v&lm&t',
          templateUrl: routes.studyListening[0],
          controller: routes.studyListening[1],
          resolve: {
            auth: ['$auth', function($auth) {
              return $auth.validateUser();
            }]
          }
        })
        .state('studyShadowing', {
          url: '/studyShadowing?v&lm&t',
          templateUrl: routes.studyShadowing[0],
          controller: routes.studyShadowing[1],
          resolve: {
            auth: ['$auth', function($auth) {
              return $auth.validateUser();
            }]
          }
        })
        .state('studySpeaking', {
          url: '/studySpeaking?v&lm&t',
          templateUrl: routes.studySpeaking[0],
          controller: routes.studySpeaking[1],
          resolve: {
            auth: ['$auth', function($auth) {
              return $auth.validateUser();
            }]
          }
        })
        .state('studyTop', {
          url: '/studyTop',
          templateUrl: routes.studyTop[0],
          controller: routes.studyTop[1],
          resolve: {
            auth: ['$auth', function($auth) {
              return $auth.validateUser();
            }]
          }
        })
        .state('studyWriting', {
          url: '/studyWriting?v&lm&t',
          templateUrl: routes.studyWriting[0],
          controller: routes.studyWriting[1],
          resolve: {
            auth: ['$auth', function($auth) {
              return $auth.validateUser();
            }]
          }
        })
        .state('userAccount', {
          url: '/userAccount',
          templateUrl: routes.userAccount[0],
          controller: routes.userAccount[1],
          resolve: {
            auth: ['$auth', function($auth) {
              return $auth.validateUser();
            }]
          }
        })
        .state('userHome', {
          url: '/userHome',
          templateUrl: routes.userHome[0],
          controller: routes.userHome[1],
          resolve: {
            auth: ['$auth', function($auth) {
              return $auth.validateUser();
            }]
          }
        })
        .state('userInterests', {
          url: '/userInterests',
          templateUrl: routes.userInterests[0],
          controller: routes.userInterests[1],
          resolve: {
            auth: ['$auth', function($auth) {
              return $auth.validateUser();
            }]
          }
        });

      $urlRouterProvider.otherwise('/');

    }]);

})();
