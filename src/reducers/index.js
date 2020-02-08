import moviesReducer from './moviesReducer';
import serialsReducer from './serialsReducer';
import uiReducer from './uiReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	movies: moviesReducer,
	serials: serialsReducer,
	ui: uiReducer
});

export default rootReducer;
