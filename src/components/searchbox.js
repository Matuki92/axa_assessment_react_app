// react
import React from 'react';
// redux
import { connect } from 'react-redux';
import { gnomeSearch, getRandomGnome } from '../actions/gnomeactions';
// components

const SearchBox = ({ searchFilter, gnomeData, gnomeList, gnomeSearch, getRandomGnome }) => {

  // render gnome professions
  const renderProfessions = () => {
    return gnomeData.professions.map(p => {
      return (
        <option key={p}>{p}</option>
      );
    });
  }

  // render gnome hair colors
  const renderHairColors = () => {
    return gnomeData.hairColors.map(color => {
      return (
        <option key={color}>{color}</option>
      );
    });
  }

  // filter gnomes when the user modifies the select tag
  const handleGnomeSearch = ({ target }) => {
    const val = target.value;

    if (val !== 'Profession' &&
      val !== 'Hair Color' &&
      val !== 'Gender') {
      searchFilter[target.name] = val;
      gnomeSearch(gnomeList, searchFilter);
    }
  }

  // get random gnome
  const handleRandomGnomeSearch = () => {
    getRandomGnome(gnomeList);
  }

  return(
    <React.Fragment>
      <div className="searchbox">

        <div className="searchbox-container">
          <div className="searchbox-item">
            <p>Search filter:</p>
          </div>

          {/* profession */}
          <div className="searchbox-item">
            <select name="profession" onChange={handleGnomeSearch}>
              <option>Profession</option>
              {renderProfessions()}
            </select>
          </div>

          {/* hair color */}
          <div className="searchbox-item">
            <select name="hair_color" onChange={handleGnomeSearch}>
            <option>Hair color</option>
              {renderHairColors()}
            </select>
          </div>

          {/* gender */}
          <div className="searchbox-item">
            <select name="gender" onChange={handleGnomeSearch}>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        <div className="searchbox-container">
          <div className="searchbox-item">
            <p>Or... pick random gnome!</p>
          </div>

          {/* random button */}
          <div className="searchbox-item">
            <button 
              type="button"
              onClick={handleRandomGnomeSearch}
            >
              Random pick
            </button>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
}

const mapStateToProps = ({ gnomeSearch, getRandomGnome, gnomes }) => ({
  gnomeSearch,
  getRandomGnome,
  searchFilter: gnomes.search.searchFilter,
  gnomeList: gnomes.list,
  gnomeData: gnomes.data
});

export default connect(mapStateToProps, { gnomeSearch, getRandomGnome })(SearchBox)