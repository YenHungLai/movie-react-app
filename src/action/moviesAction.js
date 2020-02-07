export const setNowPlaying = payload => {
	return {
		type: 'SET_NOW_PLAYING',
		payload
	};
};

export const setTopRated = payload => {
	return {
		type: 'SET_TOP_RATED',
		payload
	};
};
