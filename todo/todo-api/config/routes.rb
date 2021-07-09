Rails.application.routes.draw do
  resources :todos, only: %i[create update index]
end
