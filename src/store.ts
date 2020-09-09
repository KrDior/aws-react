/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './store/reducers/rootReducer';

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const configureStore = (initialState: any) => createStore(rootReducer,
  initialState, composeEnhancers(applyMiddleware(thunk, logger)));
const store = configureStore({});
/* eslint-enable */

export default store;
