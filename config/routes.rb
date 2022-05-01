Rails.application.routes.draw do
  get 'bought_pokemons/index'
  get 'bought_pokemons/create'
  get 'bought_pokemons/update'
  get 'bought_pokemons/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'bought_pokemons#index'
end
