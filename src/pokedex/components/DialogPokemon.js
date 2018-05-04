// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// Utils
import { isDefined } from '../../shared/utils/is';


class DialogPokemon extends Component {
  static propTypes = {
    pokemon: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { pokemon } = this.props;
    const { newPokemon } = newProps;

    if ( pokemon !== newPokemon ) {
      this.handleOpen();
    }
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const { pokemon } = this.props;
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    if(!isDefined(pokemon)) {
      return null;
    }

    return (
        <Dialog
          title="Pokemon Information"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <ul>
            <li><strong>Name</strong>: {pokemon.name}</li>
            <li><strong>Weight</strong>: {pokemon.weight}</li>
            <li><strong>Height</strong>: {pokemon.height}</li>
          </ul>
        </Dialog>
    );
  }
}

export default connect(({ pokedex }) => ({
  pokemon: pokedex.pokemon
}), null)(DialogPokemon);
