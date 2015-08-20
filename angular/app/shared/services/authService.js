(function() {
  'use strict';

  var authService = function($auth, $state, Flash, Announce, LanguageModule, Cue, Language) {

    // login the user and redirect them to userHome
    this.login = function(loginForm) {
      $auth.submitLogin(loginForm)
        .then(function() {
          $state.go('userHome');
          Flash.create('success', Announce.loginSuccess);
        })
        .catch(function(res) {
          Flash.create('danger', Announce.whoops(res.errors[0]));
        });
    };

    // logout the user and redirect them to siteTop
    this.logout = function() {
      $auth.signOut()
        .then(function() {
          $state.go('siteTop');
          Flash.create('success', Announce.logoutSuccess);
        })
        .catch(function(res) {
          Flash.create('danger', Announce.whoops(res.data.errors[0]));
        });
    };

    // register the user
    this.submitRegistration = function(registrationForm) {
      $auth.submitRegistration(registrationForm)
        .then(function(res) {

          var newUser = res;
          var userId = res.data.data.id;

          function initializeUser(languageIds) {

            angular.forEach(languageIds, function(lid) {

              // create language module
              var lm = new LanguageModule.resource();
              lm.user_id = userId;
              lm.language_id = lid;
              lm.$save(function(res) {
                var newLangModule = res.language_module;
                console.log('success', res);

                // create cue for language module
                var c = new Cue.resource();
                c.language_module_id = newLangModule.id;
                c.$save(function(res) {
                  var newCue = res.cue;
                  console.log('success', res);


                  // update language module with cue id
                  var updateLM = {};
                  updateLM.cue_id = newCue.id;
                  LanguageModule.resource.update({id: newLangModule.id}, updateLM, function(res) {
                    console.log('success', res);


                    // this should be last
                    Flash.create('success', Announce.registrationSuccess(newUser.data.data.email));


                    // errors
                  }, function(error) {
                    console.log('error', error);
                  });
                }, function(res) {
                  console.log('error', res);
                });
              }, function(res) {
                console.log('error', res);
              });
            });
          }


          function queryLanguagesSuccess(res) {
            console.log('success', res);

            var languageIds = [];
            angular.forEach(res.languages, function(lang) {
              languageIds.push(lang.id);
            });

            initializeUser(languageIds);

          };

          function queryLanguagesFailure(res) {
            console.log('failure', res);
          };

          // THIS SHOULD BE A PROVIDER THAT GETS SET UP AUTOMATICALLY ON APPLICATION START AND IS A 'VALUE' SERVICE
          Language.resource.get(queryLanguagesSuccess, queryLanguagesFailure);


        })
        .catch(function(res) {

          /*
           *
           * you should be doing angular validation here
           *
           */

          var message = document.createElement('DIV');

          var headingTextNode = document.createTextNode('Please fix the following errors and try again.');
          var headingElement = document.createElement('H3');
          headingElement.appendChild(headingTextNode);

          // create HTML error container
          var errorContainer = document.createElement('OL');

          // array of errors
          var errorMessages = res.data.errors.full_messages; // jshint ignore:line

          // For each error message
          // 1) create a new text node, and create a new element, 
          //    and append the new text node to the new element
          // 2) append the new element to the errorContainer
          angular.forEach(errorMessages, function(em) {

            var errorElement = document.createElement('LI');
            var errorTextNode = document.createTextNode(em);

            errorElement.appendChild(errorTextNode);
            errorContainer.appendChild(errorElement);

          });

          message.appendChild(headingElement);
          message.appendChild(errorContainer);

          Flash.create('danger', message);

        });
    };

  };


  angular
    .module('angularApp')
    .service('authService', authService);

  authService.$inject = ['$auth', '$state', 'Flash', 'Announce', 'LanguageModule', 'Cue', 'Language'];

})();
