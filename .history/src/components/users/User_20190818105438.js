import React, { useEffect, Fragment, useContext } from 'react';
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  //These should always come first
  const githubContext = useContext(GithubContext);
  const { user, getUser, loading, repos, getUserRepos } = githubContext;
  //useEffect will run on any update. The values in brackets will determine when the update will occur.
  //If we want it to emulate the behavior of "componentDidMount", the brackets should be blank.
  //You are going to get a warning in console that tells you that useEffect has missing dependencies. It wants you to put "getUser" and "getUserRepos" in brackets, but that will break
  //the control. The comment in useEffect will fix that issue.
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

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
  } = user;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='user-details'>
        <h1>
          <span>{name}</span>
        </h1>
        <div>
          <div>
            <img src={avatar_url} alt='' />
            <p>
              Hireable: {''}
              {hireable ? <span>Yes</span> : <span>No</span>}
            </p>
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
          <Repos repos={repos} />
          <Link to='/' className='btn'>
            Back to Search
          </Link>
        </div>
      </div>
    );
  }
};

export default User;
