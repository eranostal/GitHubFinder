import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Users from './components/users/Users';
import Search from './components/users/Search';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  const [padding, setPadding] = useState('0px');

  useEffect(() => {
    calcPadding();
    //eslint-disable-next-line
  }, []);

  const calcPadding = () => {
    setPadding(document.getElementById('header').offsetHeight + 'px');
  };

  window.onresize = () => {
    setPadding(document.getElementById('header').offsetHeight + 'px');
  };

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <div class='container' style={{ paddingTop: padding }}>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <Fragment>
                      <header id='header'>
                        <NavBar />
                        <Search />
                      </header>
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/user/:login'
                  render={props => <User {...props} />}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
