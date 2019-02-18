// react
import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { fetchGnomes, collectGnomesData } from '../actions/gnomeactions';
// components
import Header from './header';
import SearchResult from './searchresult';
import GnomeCard from './gnomecard';
import Footer from './footer';

class HomePage extends Component {

  componentWillMount() {
    const { fetchGnomes } = this.props;
    // get gnomes on component mount
    fetchGnomes();
  }

  componentDidUpdate(prevProps) {
    const { collectGnomesData, gnomeList, errors } = this.props; 

    // collect gnome data after retrieving the list
    if(!prevProps.gnomeList && !errors.fetchError) {
      collectGnomesData(gnomeList);
    }
  }

  render() {
    const { selectedGnome, searchResult } = this.props;
 
    return (
      <React.Fragment>
        <Header/>

        {/* only render card when user selects a gnome
          or picks a random one
        */}
          <section className="container">
            <React.Fragment>
              {  searchResult &&
                <SearchResult/>
              }
              { selectedGnome && 
                <GnomeCard
                  gnome={selectedGnome}
                />
              }
            </React.Fragment>
          </section>

        <Footer/>
      </React.Fragment>
    );
  }
}

// set state into component props
const mapStateToProps = ({ errors, fetchGnomes, collectGnomesData, gnomes }) => ({
  errors, 
  fetchGnomes, 
  collectGnomesData, 
  gnomeList: gnomes.list,
  searchResult: gnomes.search.searchResult,
  selectedGnome: gnomes.selectedGnome
})

export default connect(mapStateToProps, { fetchGnomes, collectGnomesData })(HomePage);