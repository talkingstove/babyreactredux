import { appStore } from './store';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import SampleApp from './components/SampleApp';

ReactDOM.render(
  <Provider store={appStore}>
      <SampleApp />
  </Provider>,
  document.getElementById('app')
);