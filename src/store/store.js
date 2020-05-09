import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/index';
import { setWindowDimension } from 'action/uiAction';

const middlewares = [];

middlewares.push(thunk);

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);
	middlewares.push(logger);
}

// Logger must be the last middleware in chain
const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

window.addEventListener('resize', () => {
	store.dispatch(
		setWindowDimension({
			innerWidth: window.innerWidth,
			innerHeight: window.innerHeight,
		})
	);
});

export default store;
