// react
import React from 'react';
//redux
import { connect } from 'react-redux';
import { setSelectedGnome } from '../actions/gnomeactions';

const SearchResult = ({ searchResult, setSelectedGnome }) => {

  // render search result
  const renderSearchResult = () => {
    return searchResult.map(gnome => {
      return (
        <option
          key={gnome.id}
          gnomeid={gnome.id}
        >
          {gnome.name}
        </option>
      );
    });
  }

  /* save selected gnome so it can be showed in searchresult component  */
  const handleSelectedGnome = ({ target }) => {
    const selectedGnome = searchResult.find(gnome => (
      gnome.name === target[target.selectedIndex].value)
    );
    setSelectedGnome(selectedGnome);
  }

  return (
    <div className="searchresult-container">
      {/* show number of gnomes */}
      {searchResult.length} gnomes found!

      {/* result dropdown */}
      <select 
        onChange={handleSelectedGnome}
      >
        <option>Show result</option>
        {renderSearchResult()}
      </select>
      
    </div>
  );
}

const mapStateToProps = ({ selectedGnome, gnomes }) => ({
  selectedGnome,
  searchResult: gnomes.search.searchResult
})

export default connect(mapStateToProps, { setSelectedGnome } )(SearchResult);