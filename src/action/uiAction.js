export const setHomePageContent = (payload) => {
	return {
		type: 'SET_HOME_PAGE_CONTENT',
		payload,
	};
};

export const setShowLeftDrawer = (payload) => {
	return {
		type: 'SET_SHOW_LEFT_DRAWER',
		payload,
	};
};

export const setWindowDimension = (payload) => {
	return {
		type: 'SET_WINDOW_DIMENSION',
		payload,
	};
};
