# == Route Map
#
#                   Prefix Verb   URI Pattern                            Controller#Action
#         new_user_session GET    /auth/sign_in(.:format)                devise_token_auth/sessions#new
#             user_session POST   /auth/sign_in(.:format)                devise_token_auth/sessions#create
#     destroy_user_session DELETE /auth/sign_out(.:format)               devise_token_auth/sessions#destroy
#            user_password POST   /auth/password(.:format)               devise_token_auth/passwords#create
#        new_user_password GET    /auth/password/new(.:format)           devise_token_auth/passwords#new
#       edit_user_password GET    /auth/password/edit(.:format)          devise_token_auth/passwords#edit
#                          PATCH  /auth/password(.:format)               devise_token_auth/passwords#update
#                          PUT    /auth/password(.:format)               devise_token_auth/passwords#update
# cancel_user_registration GET    /auth/cancel(.:format)                 devise_token_auth/registrations#cancel
#        user_registration POST   /auth(.:format)                        devise_token_auth/registrations#create
#    new_user_registration GET    /auth/sign_up(.:format)                devise_token_auth/registrations#new
#   edit_user_registration GET    /auth/edit(.:format)                   devise_token_auth/registrations#edit
#                          PATCH  /auth(.:format)                        devise_token_auth/registrations#update
#                          PUT    /auth(.:format)                        devise_token_auth/registrations#update
#                          DELETE /auth(.:format)                        devise_token_auth/registrations#destroy
#        user_confirmation POST   /auth/confirmation(.:format)           devise_token_auth/confirmations#create
#    new_user_confirmation GET    /auth/confirmation/new(.:format)       devise_token_auth/confirmations#new
#                          GET    /auth/confirmation(.:format)           devise_token_auth/confirmations#show
#      auth_validate_token GET    /auth/validate_token(.:format)         devise_token_auth/token_validations#validate_token
#             auth_failure GET    /auth/failure(.:format)                devise_token_auth/omniauth_callbacks#omniauth_failure
#                          GET    /auth/:provider/callback(.:format)     devise_token_auth/omniauth_callbacks#omniauth_success
#                          GET    /auth/:provider(.:format)              redirect(301)
#         language_modules GET    /language_modules(.:format)            language_modules#index
#                          POST   /language_modules(.:format)            language_modules#create
#      new_language_module GET    /language_modules/new(.:format)        language_modules#new
#     edit_language_module GET    /language_modules/:id/edit(.:format)   language_modules#edit
#          language_module GET    /language_modules/:id(.:format)        language_modules#show
#                          PATCH  /language_modules/:id(.:format)        language_modules#update
#                          PUT    /language_modules/:id(.:format)        language_modules#update
#                          DELETE /language_modules/:id(.:format)        language_modules#destroy
#            video_scripts GET    /video_scripts(.:format)               video_scripts#index
#                          POST   /video_scripts(.:format)               video_scripts#create
#         new_video_script GET    /video_scripts/new(.:format)           video_scripts#new
#        edit_video_script GET    /video_scripts/:id/edit(.:format)      video_scripts#edit
#             video_script GET    /video_scripts/:id(.:format)           video_scripts#show
#                          PATCH  /video_scripts/:id(.:format)           video_scripts#update
#                          PUT    /video_scripts/:id(.:format)           video_scripts#update
#                          DELETE /video_scripts/:id(.:format)           video_scripts#destroy
#          writing_prompts GET    /writing_prompts(.:format)             writing_prompts#index
#                          POST   /writing_prompts(.:format)             writing_prompts#create
#       new_writing_prompt GET    /writing_prompts/new(.:format)         writing_prompts#new
#      edit_writing_prompt GET    /writing_prompts/:id/edit(.:format)    writing_prompts#edit
#           writing_prompt GET    /writing_prompts/:id(.:format)         writing_prompts#show
#                          PATCH  /writing_prompts/:id(.:format)         writing_prompts#update
#                          PUT    /writing_prompts/:id(.:format)         writing_prompts#update
#                          DELETE /writing_prompts/:id(.:format)         writing_prompts#destroy
#                   topics GET    /topics(.:format)                      topics#index
#                          POST   /topics(.:format)                      topics#create
#                new_topic GET    /topics/new(.:format)                  topics#new
#               edit_topic GET    /topics/:id/edit(.:format)             topics#edit
#                    topic GET    /topics/:id(.:format)                  topics#show
#                          PATCH  /topics/:id(.:format)                  topics#update
#                          PUT    /topics/:id(.:format)                  topics#update
#                          DELETE /topics/:id(.:format)                  topics#destroy
#                languages GET    /languages(.:format)                   languages#index
#                          POST   /languages(.:format)                   languages#create
#             new_language GET    /languages/new(.:format)               languages#new
#            edit_language GET    /languages/:id/edit(.:format)          languages#edit
#                 language GET    /languages/:id(.:format)               languages#show
#                          PATCH  /languages/:id(.:format)               languages#update
#                          PUT    /languages/:id(.:format)               languages#update
#                          DELETE /languages/:id(.:format)               languages#destroy
#               categories GET    /categories(.:format)                  categories#index
#                          POST   /categories(.:format)                  categories#create
#             new_category GET    /categories/new(.:format)              categories#new
#            edit_category GET    /categories/:id/edit(.:format)         categories#edit
#                 category GET    /categories/:id(.:format)              categories#show
#                          PATCH  /categories/:id(.:format)              categories#update
#                          PUT    /categories/:id(.:format)              categories#update
#                          DELETE /categories/:id(.:format)              categories#destroy
#                   videos GET    /videos(.:format)                      videos#index
#                          POST   /videos(.:format)                      videos#create
#                new_video GET    /videos/new(.:format)                  videos#new
#               edit_video GET    /videos/:id/edit(.:format)             videos#edit
#                    video GET    /videos/:id(.:format)                  videos#show
#                          PATCH  /videos/:id(.:format)                  videos#update
#                          PUT    /videos/:id(.:format)                  videos#update
#                          DELETE /videos/:id(.:format)                  videos#destroy
#          writing_answers GET    /writing_answers(.:format)             writing_answers#index
#                          POST   /writing_answers(.:format)             writing_answers#create
#       new_writing_answer GET    /writing_answers/new(.:format)         writing_answers#new
#      edit_writing_answer GET    /writing_answers/:id/edit(.:format)    writing_answers#edit
#           writing_answer GET    /writing_answers/:id(.:format)         writing_answers#show
#                          PATCH  /writing_answers/:id(.:format)         writing_answers#update
#                          PUT    /writing_answers/:id(.:format)         writing_answers#update
#                          DELETE /writing_answers/:id(.:format)         writing_answers#destroy
#                 speakers GET    /speakers(.:format)                    speakers#index
#                          POST   /speakers(.:format)                    speakers#create
#              new_speaker GET    /speakers/new(.:format)                speakers#new
#             edit_speaker GET    /speakers/:id/edit(.:format)           speakers#edit
#                  speaker GET    /speakers/:id(.:format)                speakers#show
#                          PATCH  /speakers/:id(.:format)                speakers#update
#                          PUT    /speakers/:id(.:format)                speakers#update
#                          DELETE /speakers/:id(.:format)                speakers#destroy
#                     cues GET    /cues(.:format)                        cues#index
#                          POST   /cues(.:format)                        cues#create
#                  new_cue GET    /cues/new(.:format)                    cues#new
#                 edit_cue GET    /cues/:id/edit(.:format)               cues#edit
#                      cue GET    /cues/:id(.:format)                    cues#show
#                          PATCH  /cues/:id(.:format)                    cues#update
#                          PUT    /cues/:id(.:format)                    cues#update
#                          DELETE /cues/:id(.:format)                    cues#destroy
#             collocations GET    /collocations(.:format)                collocations#index
#                          POST   /collocations(.:format)                collocations#create
#          new_collocation GET    /collocations/new(.:format)            collocations#new
#         edit_collocation GET    /collocations/:id/edit(.:format)       collocations#edit
#              collocation GET    /collocations/:id(.:format)            collocations#show
#                          PATCH  /collocations/:id(.:format)            collocations#update
#                          PUT    /collocations/:id(.:format)            collocations#update
#                          DELETE /collocations/:id(.:format)            collocations#destroy
#                          GET    /omniauth/:provider/callback(.:format) devise_token_auth/omniauth_callbacks#redirect_callbacks
#         omniauth_failure GET    /omniauth/failure(.:format)            devise_token_auth/omniauth_callbacks#omniauth_failure
#

Rails.application.routes.draw do

  get 'hasVideo/:user_id/:video_id' => 'users#hasVideo'

  mount_devise_token_auth_for 'User', at: 'auth'
  resources :language_modules
  resources :video_scripts
  resources :writing_prompts
  resources :topics
  resources :languages
  resources :categories
  resources :videos
  resources :writing_answers
  resources :speakers
  resources :cues
  resources :collocations

  post 'add_video_to_cue/:cue_id/:video_id' => 'cues#add_video_to_cue'
  delete 'remove_video_from_cue/:user_id/:video_id.json' => 'cues#remove_video_from_cue'
  

  # resources :users <- this was generated as a result of 'rails scaffold user'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
