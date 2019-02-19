import { LOADING_GNOMES } from '../actions/types';

const initialState = {
  loading: {
    loadingGnomes: false
  }
}

export default (state = initialState.loading, action) => {
  switch (action.type) {

    case LOADING_GNOMES: 
    // modify error value and return new state
      return { ...state, loadingGnomes: action.payload }
    
    default: return state;
  }
}