import axios from './axios-with-interceptors';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios'; // or another driver

const configureStore = () => {
  const { requestsReducer, requestsMiddleware } = handleRequests({
    driver: createDriver(axios),
  });

  const reducers = combineReducers({
    requests: requestsReducer,
  });

  const store = createStore(
    reducers,
    compose(
      applyMiddleware( ...requestsMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
export default configureStore();
