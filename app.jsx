import { appStore } from './src/store';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import SampleApp from './src/components/SampleApp';

ReactDOM.render(
  <Provider store={appStore}>
      <SampleApp />
  </Provider>,
  document.getElementById('app')
);