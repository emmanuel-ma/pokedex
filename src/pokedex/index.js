// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { fetchPokemons } from './actions';

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
  }

  handleFetchPokemonsClick() {
    const { dispatch } = this.props;

    // Fetch Pokemons of type 'flying' --> 3
    dispatch(fetchPokemons(3));
  }

  render() {
    const { pokemonType } = this.props;

    return (
      <div className="Pokemon">
        <button onClick={this.handleFetchPokemonsClick}>
          Load Pokemons
        </button>
        <ul> Pokemons:
          {isDefined(pokemonType) && isDefined(pokemonType.pokemon) &&
            pokemonType.pokemon.map((pokemon, index) =>
            <li key={index}>
              <h1>{pokemon.pokemon.name}</h1>
              <span>{pokemon.pokemon.url}</span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(({ pokedex }) => ({
  pokemonType: pokedex.pokemonType
}), null)(Pokedex);
