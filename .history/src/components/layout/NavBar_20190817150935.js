import React from 'react';
import PropTypes from 'prop-types';
import Search from '../users/Search';
import { Link } from 'react-router-dom';

const NavBar = ({ title }) => {
  console.log(history);

  return (
    <nav>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <Search />
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
