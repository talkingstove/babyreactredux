import { appStore } from './reducer';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={appStore}>
    
  </Provider>,
  document.getElementById('app')
);