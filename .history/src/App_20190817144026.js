import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Alert from './components/layout/Alert';
import NavBar from './components/layout/NavBar';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  const [padding, setPadding] = useState('0px');
  const history = history({ forceRefresh: true });

  /*useEffect(() => {
    calcPadding();
    //eslint-disable-next-line
  }, []);

  const calcPadding = () => {
    setPadding(document.getElementById('header').offsetHeight + 'px');
  };

  window.onresize = () => {
    setPadding(document.getElementById('header').offsetHeight + 'px');
  };*/

  //style={{ paddingTop: padding }}

  const goHome = () => {
    history.push('/');
  };

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
              <div
                onClick={goHome}
                style={{ position: 'absolute', bottom: '0px', right: '0px' }}
              >
                Go Home
              </div>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
