require "test_helper"

class BoughtPokemonsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get bought_pokemons_index_url
    assert_response :success
  end

  test "should get create" do
    get bought_pokemons_create_url
    assert_response :success
  end

  test "should get update" do
    get bought_pokemons_update_url
    assert_response :success
  end

  test "should get destroy" do
    get bought_pokemons_destroy_url
    assert_response :success
  end
end
