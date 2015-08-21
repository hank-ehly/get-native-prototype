(function() {
  'use strict';

  var authService = function($auth, $state, Flash, Announce, LanguageModule, Cue, Language) {

    var service;

    // ----------------------------------------------

    /*
     * LOGIN
     * login the user and redirect them to userHome
     */
    
    function login(loginForm) {

      $auth.submitLogin(loginForm)
        .then(function() {

          $state.go('userHome');
          Flash.create('success', Announce.loginSuccess);

        })
        .catch(function(res) {

          Flash.create('danger', Announce.whoops(res.errors[0]));

        });

    } // end login



    /*
     * LOGOUT
     * logout the user and redirect them to siteTop
     */

    function logout() {

      $auth.signOut()
        .then(function() {

          $state.go('siteTop');
          Flash.create('success', Announce.logoutSuccess);

        })
        .catch(function(res) {

          Flash.create('danger', Announce.whoops(res.data.errors[0]));

        });

    } // end logout



    /*
     * REGISTER
     * register the user
     */

    function submitRegistration(registrationForm) {

      // first submit registration with $auth service
      $auth.submitRegistration(registrationForm)
        .then(function(res) {

          // unpack JSON object containing newly created user data
          var newUser = res.data.data;

          /*
           * This function creates language modules and cues
           * for the new user based on the language_id's 
           * passed to it. The reason you pass language_id's
           * to it is because, if some language gets 
           * registered as some unconsecutive number, we can
           * rely on its ID, which will always get passed here.
           */
          
          function setupUser(languageIds) {

            angular.forEach(languageIds, function(langId) {

              /*
               * A new language module will be created for each
               * lang id passed to this function.
               * It takes 3 params:
               *    1) user_id
               *    2) language_id
               *    3) cue_id
               *  We can't create the cue_id right now, because we have no cue to work with.
               *  We create the cue later, and then update language module with its ID.
               */

              var lm          = new LanguageModule.resource();
              lm.user_id      = newUser.id; 
              lm.language_id  = langId; 

              // save instance of new language module
              lm.$save(function(res) {

                var newLangModule = res.language_module; 

                /* Now we create the cue for the language module we just created */

                // new instance takes language_module_id
                var c = new Cue.resource( { language_module_id: newLangModule.id } );

                // save instance of new cue
                c.$save(function(res) {

                  // newly saved cue instance
                  var newCue = res.cue;

                  /*
                   * Here is where we connect the new Language Module to the new Cue.
                   * We update the new Language Module with the new Cue's cue_id.
                   * This allows us to query: LanguageModule.Cue
                   */
                  
                  // Add cue_id to language module
                  var updateLM    = {};
                  updateLM.cue_id = newCue.id; 

                  // perform update on language module
                  LanguageModule.resource.update({id: newLangModule.id}, updateLM, function() {

                    /*
                     * At this point, everything has gona smoothly. 
                     * We show a message and do whatever else knowing
                     * everything has been created successfully
                     */
                    
                    Flash.create('success', Announce.registrationSuccess(newUser.email));

                    // error handlers
                  }, updateLanguageModuleFailure);
                }, saveCueFailure);
              }, saveLanguageModuleFailure);
            });
          }


          function queryLanguagesSuccess(res) {

            /*
             * Make an array of all the language_id's that exists
             * so that we can create cues and language modules 
             * based on those IDs
             */

            var languageIds = [];

            angular.forEach(res.languages, function(lang) {

              languageIds.push(lang.id);

            });

            /*
             * This function creates language_modules and cues 
             * for the new user based on the available language_ids
             */
            
            setupUser(languageIds);

          }

          // error handlers
          function saveLanguageModuleFailure  (res) { console.log('Error', res); }
          function saveCueFailure             (res) { console.log('Error', res); }
          function updateLanguageModuleFailure(res) { console.log('Error', res); }
          function queryLanguagesFailure      (res) { console.log('Error', res); }

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
          var errorMessages = res.data.errors.full_messages;

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

    } // end register

    // ----------------------------------------------

    service = {
                   login: login,
                  logout: logout,
      submitRegistration: submitRegistration
    };

    return service;

  };


  angular
    .module('angularApp')
    .factory('authService', authService);

  authService.$inject = ['$auth', '$state', 'Flash', 'Announce', 'LanguageModule', 'Cue', 'Language'];

})();
