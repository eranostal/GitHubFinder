//Initial state, and actions. (instead of App.js)
import React, { useReducer } from 'react';
import PaddingContext from './paddingContext';
import PaddingReducer from './paddingReducer';
import { CALC_HEADER_PADDING } from '../types';

const PaddingState = props => {
  //Global state for anything that has to do with Github.
  const initialState = {
    headerPadding: '0px'
  };

  //Dispatch to the recucer
  const [state, dispatch] = useReducer(PaddingReducer, initialState);

  //Get Repos
  const getUserRepos = async username => {
    dispatch({
      type: CALC_HEADER_PADDING,
      payload: '10px'
    });
  };

  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set Loading. We don't need a payload for this because we can just set the value to true.
  const setLoading = () => dispatch({ type: SET_LOADING });
  //When you call githubContext, all of this is available.
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default PaddingState;
