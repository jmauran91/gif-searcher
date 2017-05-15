Rails.application.routes.draw do

  resources :gifs

  root 'home#index'
end
