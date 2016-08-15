import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { reduxForm } from 'redux-form';

const LoginForm = props => {
  const submit = (props.submitting === true) ? (
    (
      <button type="submit" disabled className="btn btn-primary">
        ...
      </button>
    )
  ) : (
    (
      <button type="submit" className="btn btn-primary">
        <FormattedMessage id="app.loginForm.submit"/>
      </button>
    )
  );

  return (
    <form className="login-form" onSubmit={props.handleSubmit}>
      <fieldset disabled={props.submitting}>
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputEmail1">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email Address"/>
        </div>

        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputPassword1">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
      </fieldset>

      <div className="row">
        <div className="col-xs-6">
          {submit}
        </div>

        <div className="col-xs-6">

        </div>
      </div>
    </form>
  );
};

LoginForm.displayName = 'LoginForm';
LoginForm.propTypes = {

};

export const FORM_KEY = 'loginForm';
export const FIELDS = [
  'email',
  'password'
];

let DecoratedComponent = LoginForm;
DecoratedComponent = reduxForm({
  form: FORM_KEY,
  fields: FIELDS
})(DecoratedComponent);
export default DecoratedComponent;