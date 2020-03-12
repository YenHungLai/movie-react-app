const INITIAL_STATE = {
	onTheAir: [],
	popular: [],
	topRated: [],
	upComing: []
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
		default:
			return state;
	}
};

export default serialsReducer;
