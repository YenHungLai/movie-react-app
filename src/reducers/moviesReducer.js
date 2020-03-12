const INITIAL_STATE = {
	nowPlaying: [],
	popular: [],
	topRated: [],
	upComing: []
};

const moviesReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case 'SET_NOW_PLAYING_MOVIES':
			return {
				...state,
				nowPlaying: payload
			};
		case 'SET_TOP_RATED_MOVIES':
			return {
				...state,
				topRated: payload
			};
		case 'SET_POPULAR_MOVIES':
			return {
				...state,
				popular: payload
			};
		default:
			return state;
	}
};

export default moviesReducer;
