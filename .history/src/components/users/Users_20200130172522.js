import React, { useContext } from 'react';
import UserItem from './UserItem';
import Loading from '../layout/Loading';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  //Makes all of the context within' githubContext.js available.
  const githubContext = useContext(GithubContext);

  //Destructure the GithubContext
  const { loading, users } = githubContext;

  if (!loading && users.length === 0) {
    return (
      <div className='default-text'>
        User Results Will Display Here.
      </div>
    );
  } else if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='show-results'>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
export default Users;
