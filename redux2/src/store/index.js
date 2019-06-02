import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from '../reducer';

let store = createStore(reducers, applyMiddleware(promiseMiddleware))

export default store;