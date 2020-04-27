import {
	getOnTheAirSerials,
	getTopRatedSerials,
	getPopularSerials,
	getAiringTodaySerials,
} from '../services';

export const setOnTheAirSerials = () => (dispatch) => {
	getOnTheAirSerials().then((payload) => {
		dispatch({
			type: 'SET_ON_THE_AIR_SERIALS',
			payload,
		});
	});
};

export const setTopRatedSerials = () => (dispatch) => {
	getTopRatedSerials().then((payload) => {
		dispatch({
			type: 'SET_TOP_RATED_SERIALS',
			payload,
		});
	});
};

export const setPopularSerials = () => (dispatch) => {
	getPopularSerials().then((payload) => {
		dispatch({
			type: 'SET_POPULAR_SERIALS',
			payload,
		});
	});
};

export const setAiringTodaySerials = () => (dispatch) => {
	getAiringTodaySerials().then((payload) => {
		dispatch({
			type: 'SET_AIRING_TODAY_SERIALS',
			payload,
		});
	});
};
