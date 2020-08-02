import { createStore, applyMiddleware, compose } from 'redux';
import todoAppReducer from './reducer';
import { Provider } from 'react-redux';
import React from 'react';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(todoAppReducer, enhancer);

const StoreRedux = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreRedux;
