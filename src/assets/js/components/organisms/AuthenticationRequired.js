import React, { PropTypes } from 'react';
import AuthenticationRequiredContainer from '../../hoc/AuthenticationRequiredContainer';

const AuthenticationRequired = props => {
  return props.children[0];
};
AuthenticationRequired.displayName = 'AuthenticationRequired';
AuthenticationRequired.propTypes = {
  children: PropTypes.node
};

let DecoratedComponent = AuthenticationRequired;
DecoratedComponent = AuthenticationRequiredContainer()(DecoratedComponent);
export default DecoratedComponent;