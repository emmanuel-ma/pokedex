import { API } from './constants';

const apiUrl = 'https://pokeapi.co/api/v2/';

class PokedexApi {
  static getPokemonsByType(type = 3) {
    const url = apiUrl + API.POKEDEX.POKEMONS_BY_TYPE.replace(':type', type);
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
    };

    return fetch(url, requestOptions).then(response => response.json());
  }

  static getPokemon(url) {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
    };

    return fetch(url, requestOptions).then(response => response.json());
  }
}

export default PokedexApi;
