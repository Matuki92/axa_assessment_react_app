// react
import React from 'react';
// redux
import { connect } from 'react-redux';
// components
import SearchBox from './searchbox';
import Announcement from './announcement';
import Loading from './loading';


const Header = ({ errors, data }) => {
  
  return(
    <header id="header">
      <h1 className="title">Brastlewark</h1>
      
      {/* render or show error */}
      {!errors.fetchError ?
        <React.Fragment>
          {/* show loading while fetching gnomes */}
          { data ?
            <React.Fragment>
              <Announcement
                data={data}
              />
              <SearchBox/>
            </React.Fragment>
          :
            <Loading />
          }
        </React.Fragment>
      :
        <p>Something went wrong while retrieving the data!</p>
      }

    </header>
  );
}

// set state into component props
const mapStateToProps = ({ errors, gnomes, loading }) => ({
  errors, 
  data: loading.loadingGnomes ? null : gnomes.data
});

export default connect(mapStateToProps)(Header);