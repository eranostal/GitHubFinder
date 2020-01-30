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
        <div class='info'>
          <div>
            <img src={avatar_url} alt='' />
            <p>
              <strong>Hireable:</strong> {''}
              {hireable ? <span>Yes</span> : <span>No</span>}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <section>
              {bio && (
                <Fragment>
                  <h3>
                    <strong>Bio:</strong>
                  </h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} target='_blank'>
                Visit Github Profile
              </a>
            </section>
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
                    <h3>
                      <strong>Website:</strong>
                    </h3>{' '}
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
          <div>
            <div>
              <strong>Followers:</strong> {followers}
            </div>
            <div>
              <strong>Following:</strong> {following}
            </div>
            <div>
              <strong>Public Repos:</strong> {public_repos}
            </div>
            <div>
              <strong>Public Gists:</strong> {public_gists}
            </div>
          </div>
          <div>
            <h3>
              <strong>Repos</strong>
            </h3>
            <Repos repos={repos} />
          </div>
          <Link to='/' className='btn back'>
            Back to Search
          </Link>
        </div>
      </div>
    );
  }
};

export default User;
