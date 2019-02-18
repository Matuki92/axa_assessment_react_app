
// redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootreducer';

// initial app state
const initialState = {};

// export store
export default createStore(
  // use root reducer
  rootReducer, 
  // set initial state
  initialState, 
  // apply middleware
  applyMiddleware(thunk)
);