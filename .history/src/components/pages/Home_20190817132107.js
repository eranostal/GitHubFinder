import React, { Fragment } from 'react';
import Users from '../users/Users';
import NavBar from '../layout/NavBar';

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Users />
    </Fragment>
  );
};

export default Home;
