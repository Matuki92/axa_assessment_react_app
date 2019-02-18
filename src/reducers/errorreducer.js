import { GNOME_FETCH_ERROR } from '../actions/types';

const initialState = {
  errors: {
    fetchError: false,
    loading: false
  }
}

export default (state = initialState.errors, action) => {
  switch (action.type) {

    case GNOME_FETCH_ERROR: 
    // modify error value and return new state
      return { ...state, fetchError: true }
    
    default: return state;
  }
}