import { combineReducers } from 'redux';

// Reducers
import pokedex from '../pokedex/reducer';


const rootReducer = combineReducers({
    pokedex
});

export default rootReducer;
