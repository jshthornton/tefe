import { render } from 'react-dom';
import React from 'react';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import { AppContainer } from 'react-hot-loader';
import { configureStore, sagaMiddleware } from './store';
import saga from './sagas';
import Root from './components/Root';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

function run() {
  // Store
  const store = configureStore();
  // Saga needs to run first thing after the store
  sagaMiddleware.run(saga);

  const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => { return state.routing; }
  });

  addLocaleData(enLocaleData);

  render((
    <AppContainer>
      <Root store={store} history={history}/>
    </AppContainer>
  ), document.getElementById('root'));

  /* global module, require */
  if (module.hot) {
    module.hot.accept('./components/Root', () => {
      const _Root = require('./components/Root').default;
      render(
        <AppContainer>
          <_Root store={store} history={history}/>
        </AppContainer>,
        document.getElementById('root')
      );
    });
  }
}

/* global require */
if (!global.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js'
  ], function (require) {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    run();
  });
} else {
  run();
}