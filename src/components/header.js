// react
import React from 'react';
// redux
import { connect } from 'react-redux';
// components
import SearchBox from './searchbox';
import Announcement from './announcement';


const Header = ({ errors, data }) => {

  return(
    <header id="header">
      <h1 className="title">Brastlewark</h1>
      
      {/* render or show error */}
      {!errors.fetchError && data ?
        <React.Fragment>
          <Announcement
            data={data}
          />
          <SearchBox/>
        </React.Fragment>
        :
          <p>Something went wrong while retrieving the data!</p>
      }

    </header>
  );
}

// set state into component props
const mapStateToProps = ({ errors, gnomes }) => ({
  errors, data: gnomes.data
});

export default connect(mapStateToProps)(Header);