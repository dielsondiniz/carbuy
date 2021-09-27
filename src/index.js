import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store'

import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

import StoreBuy from './storeBuy/StoreBuy';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <StoreBuy />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);

