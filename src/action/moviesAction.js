import {
	getNowPlayingMovies,
	getTopRatedMovies,
	getPopularMovies,
	getUpComingMovies,
} from '../services';

export const setNowPlayingMovies = () => (dispatch) => {
	getNowPlayingMovies().then((payload) => {
		dispatch({
			type: 'SET_NOW_PLAYING_MOVIES',
			payload,
		});
	});
};

export const setTopRatedMovies = () => (dispatch) => {
	getTopRatedMovies().then((payload) => {
		dispatch({
			type: 'SET_TOP_RATED_MOVIES',
			payload,
		});
	});
};

export const setPopularMovies = () => (dispatch) => {
	getPopularMovies().then((payload) => {
		dispatch({
			type: 'SET_POPULAR_MOVIES',
			payload,
		});
	});
};

export const setUpcomingMovies = () => (dispatch) => {
	getUpComingMovies().then((payload) => {
		dispatch({
			type: 'SET_UPCOMING_MOVIES',
			payload,
		});
	});
};
