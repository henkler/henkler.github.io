import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer component={App} />,
  rootEl
);

if (module.hot) {
  module.hot.accept('./app', () => {
    ReactDOM.render(
      <AppContainer component={require('./app').default} />,
      rootEl
    );
  });
}
