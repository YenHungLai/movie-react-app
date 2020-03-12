export const setNowPlayingMovies = payload => {
	return {
		type: 'SET_NOW_PLAYING_MOVIES',
		payload
	};
};

export const setTopRatedMovies = payload => {
	return {
		type: 'SET_TOP_RATED_MOVIES',
		payload
	};
};

export const setPopularMovies = payload => {
	return {
		type: 'SET_POPULAR_MOVIES',
		payload
	};
};
