import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div>
      <a href={repo.html_url}>Repo</a>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.array.isRequired
};

export default RepoItem;
