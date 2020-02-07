const INITIAL_STATE = {
	nowPlaying: [],
	popular: [],
	topRated: [],
	upComing: []
};

const moviesReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case 'SET_NOW_PLAYING':
			return {
				...state,
				nowPlaying: payload
			};
		case 'SET_TOP_RATED':
			return {
				...state,
				topRated: payload
			};
		default:
			return state;
	}
};

export default moviesReducer;
