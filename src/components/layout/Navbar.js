import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

const Navbar = (props) => {
  return(
    <div id="navbar">
      <div className="logo"><img src={props.logo} alt="restaurant_logo"/></div>

    </div>
  )
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired
};

export default Navbar;
