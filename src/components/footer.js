// react
import React from 'react';
// redux
import { connect } from 'react-redux';

const Footer = () => {
  
  return (
    <footer id="footer">
      <p>Developed by Matias Pierretti, powered by React.</p>
    </footer>
  );
}

// empty connect to avoid useless renders
export default connect()(Footer);