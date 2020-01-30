import React, { Fragment } from 'react';
import NavBar from '../layout/NavBar';
import Users from '../users/Users';

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Users />
    </Fragment>
  );
};

export default Home;
