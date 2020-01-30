import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ title }) => {
  return (
    <nav>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Li>
        </li>
      </ul>
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
