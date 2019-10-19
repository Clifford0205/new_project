import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducer';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import togoSagas from './sagas';
import { Provider } from 'react-redux';
import App from './../App';
import React from 'react';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
// applyMiddleware(thunk)
// other store enhancers if any

const store = createStore(reducer, enhancer);
sagaMiddleware.run(togoSagas);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(App);
}

// export default store;
