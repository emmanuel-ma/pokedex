// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Material UI Components
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/action/info-outline';
import RaisedButton from 'material-ui/RaisedButton';

// Components
import DialogPokemon from './components/DialogPokemon';

// Actions
import { fetchPokemons, getPokemon } from './actions';

// Utils
//import { isFirstRender } from '../shared/utils/data';
import { isDefined } from '../shared/utils/is';

// Assets
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

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
    const { pokemonType } = this.props;

    return (
      <div className="Pokemon">
        <RaisedButton label="Load Pokemons"
          onClick={this.handleFetchPokemonsClick}/>

        {isDefined(pokemonType) && isDefined(pokemonType.pokemon) &&
          <div style={styles.root}>
            <GridList cellHeight={180} style={styles.gridList} cols={3}>
              <Subheader>Flying Pokemons</Subheader>

              {pokemonType.pokemon.map((pokemon, index) =>
                <GridTile
                  key={index}
                  title={pokemon.pokemon.name}
                  subtitle={<span>Click on the icon</span>}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                  actionIcon={
                    <IconButton onClick={(e) => this.handleGetPokemonClick(e, pokemon.pokemon.url)}>
                      <StarBorder color="white" />
                    </IconButton>}
                >
                  <strong>{pokemon.pokemon.name}</strong>
                </GridTile>
              )}
            </GridList>
          </div>
        }

        <DialogPokemon/>

      </div>
    );
  }
}

export default connect(({ pokedex }) => ({
  pokemonType: pokedex.pokemonType
}), null)(Pokedex);
