import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.js';
import { Provider } from 'react-redux';
import {store} from './redux/store.js';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);