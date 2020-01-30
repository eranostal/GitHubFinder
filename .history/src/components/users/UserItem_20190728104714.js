import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//You've destructured this to now be a function, and inside you're passing user and the data far easier than rewriting this.props.SOMETHING a bunch of times.
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card'>
      <img src={avatar_url} alt='' style={{ width: '60px' }} />
      <h3>{login}</h3>
      <div>
        <Link className='btn' to={`/user/${login}`} target='_blank'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
