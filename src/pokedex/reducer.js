import { FETCH_POKEMONS, GET_POKEMON } from './actionTypes';

const initialState = {
  pokemonType: {},
  pokemon: {}
}

export default function pokedexReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMONS.success(): {
      //console.log(action.payload);

      return {
        ...state,
        pokemonType: action.payload
      };
    }

    case GET_POKEMON.success(): {
      //console.log(action.payload);

      return {
        ...state,
        pokemon: action.payload
      };
    }

    default:
      return state;
  }
}
