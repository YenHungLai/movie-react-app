const INITIAL_STATE = {
	homePageContent: 'movies',
	showLeftDrawer: true
};

const uiReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case 'SET_HOME_PAGE_CONTENT':
			return {
				...state,
				homePageContent: payload
			};
		case 'SET_SHOW_LEFT_DRAWER':
			return {
				...state,
				showLeftDrawer: payload
			};
		default:
			return state;
	}
};

export default uiReducer;
