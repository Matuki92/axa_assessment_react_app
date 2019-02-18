import { GNOME_FETCH_ERROR } from '../actions/types';

export const gnomeFetchError = () => dispatch => {
  dispatch({ type: GNOME_FETCH_ERROR });
}