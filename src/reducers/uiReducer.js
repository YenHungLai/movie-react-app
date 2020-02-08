const INITIAL_STATE = {
	homePageContent: 'movies'
};

const uiReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case 'SET_HOME_PAGE_CONTENT':
			return {
				...state,
				homePageContent: payload
			};
		default:
			return state;
	}
};

export default uiReducer;
