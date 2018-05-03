import pokedexApi from './api';

import { FETCH_POKEMONS } from './actionTypes';


export const fetchPokemons = (type = 3) => dispatch => {
  const receivedPokemons = pokemonType => ({
    type: FETCH_POKEMONS.success(),
    payload: pokemonType
  });

  return pokedexApi.getPokemonsByType(type)
  .then(pokemonType => dispatch(receivedPokemons(pokemonType)))
  .catch(error => console.error('Error:', error));
};
