import React, { Component } from 'react';

const AuthenticationRequiredHOC = options => {
  return WrappedComponent => {
    class AuthenticationRequired extends Component {

      componentWillMount() {
      }

      render() {
        if(this.props.isLoggedIn === true) {
          return (
            <WrappedComponent {...this.props}/>
          );
        }

        return (
          <div>
            Checking authentication...
          </div>
        );
      }
    }
    return AuthenticationRequired;
  }
};

export default AuthenticationRequiredHOC;