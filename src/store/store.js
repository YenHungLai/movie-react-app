import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';

// Logger must be the last middleware in chain
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
