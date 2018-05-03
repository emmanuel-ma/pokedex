// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { fetchPokemons, getPokemon } from './actions';

// Utils
//import { isFirstRender } from '../shared/utils/data';
import { isDefined } from '../shared/utils/is';


class Pokedex extends Component {
  static propTypes = {
    pokemonType: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.handleFetchPokemonsClick = this.handleFetchPokemonsClick.bind(this);
    this.handleGetPokemonClick = this.handleGetPokemonClick.bind(this);
  }

  handleFetchPokemonsClick() {
    const { dispatch } = this.props;

    // Fetch Pokemons of type 'flying' --> 3
    dispatch(fetchPokemons(3));
  }

  handleGetPokemonClick(event, url) {
    const { dispatch } = this.props;

    dispatch(getPokemon(url));
  }

  render() {
    const { pokemonType, pokemon } = this.props;

    return (
      <div className="Pokemon">
        <button onClick={this.handleFetchPokemonsClick}>
          Load Pokemons
        </button>

        {isDefined(pokemon) &&
          <div>
            <h1>Selected Pokemon Information</h1>
            <ul>
              <li><strong>Name</strong>: {pokemon.name}</li>
              <li><strong>Weight</strong>: {pokemon.weight}</li>
              <li><strong>Height</strong>: {pokemon.name}</li>
            </ul>
          </div>
        }

        <ul> Pokemons List:
          {isDefined(pokemonType) && isDefined(pokemonType.pokemon) &&
            pokemonType.pokemon.map((pokemon, index) =>
            <li key={index}>
              <h1>{pokemon.pokemon.name}</h1>
              <span>{pokemon.pokemon.url}</span>
              <button onClick={(e) => this.handleGetPokemonClick(e, pokemon.pokemon.url)}>
                See Info
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(({ pokedex }) => ({
  pokemonType: pokedex.pokemonType,
  pokemon: pokedex.pokemon
}), null)(Pokedex);
