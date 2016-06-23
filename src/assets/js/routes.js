import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import PagesIndex from './components/scenes/pages/Index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PagesIndex}/>
  </Route>
);