import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducer from './store/reducers/';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware()));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.querySelector('#root'));
