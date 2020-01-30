import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ title }) => {
  return (
    <nav>
      <h1>{title}</h1>
    </nav>
  );
};

//Default props take over if no props are passed.
NavBar.defaultProps = {
  title: 'Github Finder'
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavBar;
