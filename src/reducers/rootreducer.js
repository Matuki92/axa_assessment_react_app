import { combineReducers } from 'redux';
// reducers
import gnomeReducer from './gnomereducer';
import errorReducer from './errorreducer';

// combine all the reducers
export default combineReducers({
  gnomes: gnomeReducer,
  errors: errorReducer
});
