import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AuthenticationRequiredContainer from './containers/hoc/AuthenticationRequiredContainer';
import App from './components/App';
import PagesIndex from './components/scenes/pages/Index';
import AuthLogin from './components/scenes/auth/Login';
import _ from 'lodash';

const Restricted = _.mapValues({
  'PagesIndex': PagesIndex
}, (component) => {
  return AuthenticationRequiredContainer()(component);
});

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Restricted.PagesIndex}/>

    <Route path="/signin" component={AuthLogin}/>
  </Route>
);