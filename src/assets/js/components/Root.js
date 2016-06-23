import React, { PropTypes } from 'react';
import en from '../locales/en';
import routes from '../routes';
import { getLang } from '../utils/locale';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

const render = (props) => {
  const lang = getLang();
  let messages;

  switch(lang) {
    case 'en':
      messages = en;
      break;
    case 'zh':
      messages = zh;
      break;
    default:
      messages = en;
  }

  return (
    <Provider store={props.store}>
      <IntlProvider locale={lang} messages={messages.messages}>
        <Router history={props.history}>
          {routes}
        </Router>
      </IntlProvider>
    </Provider>
  );
};
render.displayName = 'Root';
render.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default render;