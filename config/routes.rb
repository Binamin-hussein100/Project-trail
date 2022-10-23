Rails.application.routes.draw do
  
  resources :tasks, only: [:index, :create , :update, :show, :destory]
  resources :projects
  resources :users ,only: [:index, :create, :update, :show, :destory]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/projects", to: "projects#index"
  post "/projects", to: "projects#create"
  


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
