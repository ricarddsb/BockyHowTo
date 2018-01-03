import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistState } from 'redux-devtools';
import rootReducer from 'reducers';
import { DevTools } from 'containers';
import rootSaga from '../sagas';

const reducers = require('../reducers/index');

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const enhancer = compose(
  composeEnhancers(applyMiddleware(sagaMiddleware)),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/,
    ),
  ),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers/index', () =>
      store.replaceReducer(reducers.default),
    );
  }
  sagaMiddleware.run(rootSaga);
  return store;
}
