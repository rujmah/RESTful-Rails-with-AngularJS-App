Rails.application.routes.draw do
  root 'dashboard#index'

  namespace :api, defaults: {format: :json} do
    resources :albums, :artists
  end
  
end
