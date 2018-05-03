import { FETCH_POKEMONS } from './actionTypes';

const initialState = {
  pokemonType: {}
}

export default function pokedexReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMONS.success(): {
      console.log(action.payload);

      return {
        ...state,
        pokemonType: action.payload
      };
    }

    default:
      return state;
  }
}
