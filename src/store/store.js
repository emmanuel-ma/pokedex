import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middleware = [ thunk ];

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleware)
);

export default store;
