import React, { Component } from 'react';

export class User extends Component {
  //The param in this case is the login ":login"
  componentDidMount = () => {
    this.props.getUser(this.props.match.params.login);
  };

  render() {
    return <div>User</div>;
  }
}

export default User;
