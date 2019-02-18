import { 
  FETCH_GNOMES, SELECTED_GNOME, GNOMES_DATA, SEARCH_RESULT,
  GNOME_FETCH_ERROR
} from './types';

const setGender = gnome => {
  const fullName = gnome.name;
  // save first name in variable
  const name = fullName.substring(0, fullName.indexOf(' '));
  // define list of all current and possible female names
  const femaleNames = ['Libalia', 'Sarabink', 'Tinadette', 'Emmadette', 'Minabonk']
  // check wether our gnome name belongs in the female names list
  const isFemale = femaleNames.find(n => n === name);
  // return result
  return isFemale ? 'Female' : 'Male';
}

export const fetchGnomes = () => async dispatch => {

  // sends fetch error and turns loading to false
  const catchErr = () => {
    dispatch({ type: GNOME_FETCH_ERROR });
  }
  
  try {
    // fetch all the data
    const response = await fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');

    // proceed only if server responds with 200
    if (response.status === 200) {
      const data = await response.json();
      const list = data.Brastlewark;
      // set gnome gender
      list.forEach(gnome => gnome.gender = setGender(gnome));
      // dispatch new data
      return dispatch({
        type: FETCH_GNOMES,
        payload: list
      });
    }
    throw Error('fetch error');
  } catch (err) {
    console.log(err);
    catchErr();
  }
}

export const collectGnomesData = list => dispatch => {

  // define all the data to collect
  const professions = [],
    hairColors = []

  // min value is 999 initially so gnome.value can always be less
  // when comparing in the first iteration
  let minWeight = 999,
    minHeight = 999,
    maxWeight = 0,
    maxHeight = 0,
    minAge = 999,
    maxAge = 0,
    totalGnomes = list.length;

  list.forEach(gnome => {
    // get total professions
    // if profession is already in the array, skip push
    gnome.professions.forEach(p => {
      if (professions.indexOf(p) === -1) {
        return professions.push(p);
      }
      return;
    });

    // get hair colors
    if (hairColors.indexOf(gnome.hair_color) === -1) {
      hairColors.push(gnome.hair_color);
    }

    // get max weight and height
    maxWeight = gnome.weight > maxWeight ? gnome.weight : maxWeight;
    maxHeight = gnome.height > maxHeight ? gnome.height : maxHeight;
    // get min weight and height
    minWeight = gnome.weight < minWeight ? gnome.weight : minWeight;
    minHeight = gnome.height < minHeight ? gnome.height : minHeight;
    // get max age
    maxAge = gnome.age > maxAge ? gnome.age : maxAge;
    minAge = gnome.age < minAge ? gnome.age : minAge;
  });

  // send all the collected data
  dispatch({
    type: GNOMES_DATA,
    payload: {
      professions,
      hairColors, 
      minHeight, 
      maxHeight, 
      minWeight, 
      maxWeight, 
      minAge,
      maxAge,
      totalGnomes
    }
  });
}

// search gnomes with received filter
export const gnomeSearch = (list, searchFilter) => dispatch => {
  let searchResult = list;

  // every iteration searches over the last iteration's result
  for (let filter in searchFilter) {
    // if the user looks for a profession, iterate over the professions array and return
    // the gnome objects that contain the searched value
    if (filter === 'profession') {
      searchResult = searchResult.filter(gnome => {
        if (gnome.professions.indexOf(searchFilter[filter]) !== -1) {
          return gnome;
        };
        return null;
      });
      // continue to the next iteration
      continue;
    }

    // the rest of the values use this filter
    searchResult = searchResult.filter(gnome => {
      return gnome[filter] === searchFilter[filter];
    });
  }

  // erase selected gnome to clear the ui
  dispatch({
    type: SELECTED_GNOME,
    payload: null
  });
  // send result
  return dispatch({
    type: SEARCH_RESULT,
    payload: {
      searchFilter,
      searchResult
    }
  });
}

// set selected gnome with received one
export const setSelectedGnome = gnome => dispatch => {
  return dispatch({
    type: SELECTED_GNOME,
    payload: gnome
  });
}

export const getRandomGnome = list => dispatch => {
  // get gnome from list generating a random index
  const randomGnome = list[Math.floor(Math.random() * list.length)];

  // clear search result
  dispatch({
    type: SEARCH_RESULT,
    payload: {
      searchResult: null,
      searchFilter: {}
    }
  });
  // send new selected gnome
  return dispatch({
    type: SELECTED_GNOME,
    payload: randomGnome
  });
}