//Initial state, and actions. (instead of App.js)
import React, { useReducer } from 'react';
import axios from 'axios';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  //Only need one value for the initial state
  const initialState = null;

  //Dispatch to the recucer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
