import { FETCH_GNOMES, SELECTED_GNOME, SEARCH_RESULT , GNOMES_DATA } from '../actions/types';

// no gnomes on load
const initialState = {
  gnomes: {
    list: null,
    selectedGnome: null,
    search: {
      searchResult: null,
      searchFilter: {}
    }
  }
}

export default (state = initialState.gnomes, action) => {
  switch (action.type) {
    
    // gnomes list
    case FETCH_GNOMES: 
      return { ...state, list: action.payload }

    // gnomes collected data
    case GNOMES_DATA:
      return { ...state, data: action.payload }

    // search result
    case SEARCH_RESULT:
      return { ...state, search: action.payload }

    // selected gnome for gnome-card
    case SELECTED_GNOME:
      return { ...state, selectedGnome: action.payload }

    default: return state;
  }
}