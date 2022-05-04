Rails.application.routes.draw do
  get '*path', to: 'bought_pokemons#index', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'bought_pokemons#index'
end
