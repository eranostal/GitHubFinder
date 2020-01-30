import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom';

export class User extends Component {
  //The param in this case is the login ":login"
  componentDidMount = () => {
    this.props.getUser(this.props.match.params.login);
  };

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) {
      return <Loading />;
    } else {
      return (
        <div>
          Hireable: {''}
          {hireable ? <span>Yes</span> : <span>No</span>}
          <div>
            <img src={avatar_url} alt='' />
          </div>
          <Link to='/'>Back to Search</Link>
        </div>
      );
    }
  }
}

export default User;
