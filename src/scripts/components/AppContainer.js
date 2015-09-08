import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import * as reducers from '../reducers';

const composedReducer = combineReducers(reducers);
const store = createStore(composedReducer);

const AppContainer = React.createClass({
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
});

module.exports = AppContainer;
