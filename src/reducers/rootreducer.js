import { combineReducers } from 'redux';
// reducers
import gnomeReducer from './gnomereducer';
import errorReducer from './errorreducer';
import loadingreducer from './loadingreducer';

// combine all the reducers
export default combineReducers({
  gnomes: gnomeReducer,
  errors: errorReducer,
  loading: loadingreducer
});
