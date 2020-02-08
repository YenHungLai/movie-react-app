import moviesReducer from './moviesReducer';
import serialsReducer from './serialsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	movies: moviesReducer,
	serials: serialsReducer
});

export default rootReducer;
