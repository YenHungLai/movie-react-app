import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middlewares = [];

middlewares.push(thunk);

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);
	middlewares.push(logger);
}

// Logger must be the last middleware in chain
const store = compose(applyMiddleware(...middlewares))(createStore)(
	rootReducer
);

export default store;
