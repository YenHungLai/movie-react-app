const INITIAL_STATE = {
	onTheAir: [],
	popular: [],
	topRated: [],
	airingToday: []
};

const serialsReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case 'SET_ON_THE_AIR_SERIALS':
			return {
				...state,
				onTheAir: payload
			};
		case 'SET_TOP_RATED_SERIALS':
			return {
				...state,
				topRated: payload
			};
		case 'SET_POPULAR_SERIALS':
			return {
				...state,
				popular: payload
			};
		case 'SET_AIRING_TODAY_SERIALS':
			return {
				...state,
				airingToday: payload
			};
		default:
			return state;
	}
};

export default serialsReducer;
