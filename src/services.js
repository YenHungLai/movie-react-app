import axios from 'axios';
import {
	API_KEY,
	IMG_BASE,
	IMG_SIZE,
	PATH_MOVIE,
	PATH_BASE,
	PATH_NOWPLAYING,
	PATH_TOP_RATED,
	PATH_ON_THE_AIR,
	PATH_TV
} from './constants';

export const getNowPlayingMovies = async () => {
	const {
		data: { results }
	} = await axios.get(
		`${PATH_BASE}${PATH_MOVIE}${PATH_NOWPLAYING}?api_key=${API_KEY}&language=en-US`
	);

	return results.map(item => ({
		...item,
		poster_path: `${IMG_BASE}${IMG_SIZE}${item.poster_path}`,
		backdrop_path: `${IMG_BASE}${IMG_SIZE}${item.backdrop_path}`
	}));
};

export const getTopRatedMovies = async () => {
	const {
		data: { results }
	} = await axios.get(
		`${PATH_BASE}${PATH_MOVIE}${PATH_TOP_RATED}?api_key=${API_KEY}&language=en-US`
	);

	return results.map(item => ({
		...item,
		poster_path: `${IMG_BASE}${IMG_SIZE}${item.poster_path}`,
		backdrop_path: `${IMG_BASE}${IMG_SIZE}${item.backdrop_path}`
	}));
};

export const getOnTheAirSerials = async () => {
	const {
		data: { results }
	} = await axios.get(
		`${PATH_BASE}${PATH_TV}${PATH_ON_THE_AIR}?api_key=${API_KEY}&language=en-US`
	);

	return results.map(item => ({
		...item,
		poster_path: `${IMG_BASE}${IMG_SIZE}${item.poster_path}`,
		backdrop_path: `${IMG_BASE}${IMG_SIZE}${item.backdrop_path}`
	}));
};

export const getTopRatedSerials = async () => {
	const {
		data: { results }
	} = await axios.get(
		`${PATH_BASE}${PATH_TV}${PATH_TOP_RATED}?api_key=${API_KEY}&language=en-US`
	);

	return results.map(item => ({
		...item,
		poster_path: `${IMG_BASE}${IMG_SIZE}${item.poster_path}`,
		backdrop_path: `${IMG_BASE}${IMG_SIZE}${item.backdrop_path}`
	}));
};
