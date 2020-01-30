import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom';

export class User extends Component {
  //The param in this case is the login ":login"
  componentDidMount = () => {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  };

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      company,
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
            <h1>{name}</h1>
            <p>Location: {location}</p>
            <p>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url}>Visit Github Profile</a>
            </p>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website:</strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
          <div>
            <div>Followers: {followers}</div>
            <div>Following: {following}</div>
            <div>Public Repos: {public_repos}</div>
            <div>Public Gists: {public_gists}</div>
          </div>
          <Link to='/'>Back to Search</Link>
        </div>
      );
    }
  }
}

export default User;
