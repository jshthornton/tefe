import React, { PropTypes } from 'react';
import FocusTemplate from '../../templates/Focus';
import { FormattedMessage } from 'react-intl';
import LoginForm from '../../organisms/LoginForm';
import ExampleReadout from '../../organisms/ExampleReadout';

const AuthLoginPage = props => {
  return (
    <div className="scene auth-login-scene">
      <FocusTemplate>
        <div>
          <h1>
            <FormattedMessage id="app.companyName"/>
          </h1>
          <small className="text-muted">
            <FormattedMessage id="app.companySlogan"/>
          </small>

          <LoginForm/>
        </div>

        <div>
          <ExampleReadout/>
        </div>
      </FocusTemplate>
    </div>
  );
};

AuthLoginPage.displayName = 'AuthLoginPage';
AuthLoginPage.propTypes = {

};

export default AuthLoginPage;