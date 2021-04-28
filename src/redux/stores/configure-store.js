import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import initialState from './initial-state';

function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunkMiddleware, reduxImmutableStateInvariant()];

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))

  );
}

export default configureStore();
