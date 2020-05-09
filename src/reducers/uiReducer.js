const INITIAL_STATE = {
	homePageContent: 'movies',
	showLeftDrawer: true,
	windowDimension: {
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight,
	},
};

const uiReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case 'SET_HOME_PAGE_CONTENT':
			return {
				...state,
				homePageContent: payload,
			};
		case 'SET_SHOW_LEFT_DRAWER':
			return {
				...state,
				showLeftDrawer: payload,
			};
		case 'SET_WINDOW_DIMENSION':
			return {
				...state,
				windowDimension: payload,
			};
		default:
			return state;
	}
};

export default uiReducer;
