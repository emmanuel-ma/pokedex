import pokedexApi from './api';

import { FETCH_POKEMONS, GET_POKEMON } from './actionTypes';


export const fetchPokemons = (type = 3) => dispatch => {
  const receivedPokemons = pokemonType => ({
    type: FETCH_POKEMONS.success(),
    payload: pokemonType
  });

  return pokedexApi.getPokemonsByType(type)
  .then(pokemonType => dispatch(receivedPokemons(pokemonType)))
  .catch(error => console.error('Error:', error));
};

export const getPokemon = (url) => dispatch => {
  const receivedPokemon = pokemon => ({
    type: GET_POKEMON.success(),
    payload: pokemon
  });

  return pokedexApi.getPokemon(url)
  .then(pokemon => dispatch(receivedPokemon(pokemon)))
  .catch(error => console.error('Error:', error));
};
