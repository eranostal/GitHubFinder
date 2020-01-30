import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  const [padding, setPadding] = useState('0px');

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

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <div class='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
