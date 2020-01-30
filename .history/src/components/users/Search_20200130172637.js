import React, { useState, useContext } from 'react'; //useState allows us to use state in a functional component
import { withRouter } from 'react-router-dom'; //withRouter is used to refresh the page when the route changes via history
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ({ history }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  //This is our state.
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Search not valid', 'light');
    } else {
      githubContext.searchUsers(text);
      //Push a URL/Router update
      history.push('/');
      setText('');
    }
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <input
        type='text'
        name='text'
        placeholder='Search Users...'
        value={text}
        onChange={onChange}
      />
      <input type='submit' value='search' className='btn' />
      {githubContext.users.length > 0 && (
        <input
          type='button'
          className='clear'
          value='clear users'
          onClick={githubContext.clearUsers}
        />
      )}
    </form>
  );
};

export default withRouter(Search); //In order for withRouter to work, you have to wrap your export with "withRouter"
