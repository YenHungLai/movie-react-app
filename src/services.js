import axios from 'axios';
import {
	API_KEY,
	IMG_BASE,
	IMG_SIZE,
	PATH_MOVIE,
	PATH_BASE,
	PATH_NOWPLAYING,
	PATH_LATEST,
	PATH_UPCOMING,
	PATH_POPULAR,
	PATH_TOP_RATED,
	PATH_ON_THE_AIR,
	PATH_TV,
	PATH_VIDEOS,
	PATH_CREDITS
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

export const getPopularMovies = async () => {
	const {
		data: { results }
	} = await axios.get(
		`${PATH_BASE}${PATH_MOVIE}${PATH_POPULAR}?api_key=${API_KEY}&language=en-US`
	);

	return results.map(item => ({
		...item,
		poster_path: `${IMG_BASE}${IMG_SIZE}${item.poster_path}`,
		backdrop_path: `${IMG_BASE}${IMG_SIZE}${item.backdrop_path}`
	}));
};

export const getUpComingMovies = async () => {
	const {
		data: { results }
	} = await axios.get(
		`${PATH_BASE}${PATH_MOVIE}${PATH_UPCOMING}?api_key=${API_KEY}&language=en-US`
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

export const getPopularSerials = async () => {
	const {
		data: { results }
	} = await axios.get(`${PATH_BASE}${PATH_TV}${PATH_POPULAR}?api_key=${API_KEY}&language=en-US`);

	return results.map(item => ({
		...item,
		poster_path: `${IMG_BASE}${IMG_SIZE}${item.poster_path}`,
		backdrop_path: `${IMG_BASE}${IMG_SIZE}${item.backdrop_path}`
	}));
};

export const getTrailer = async (id, type) => {
	const PATH_VAR = type === 'movies' ? PATH_MOVIE : PATH_TV;
	const {
		data: { results }
	} = await axios.get(
		`${PATH_BASE}${PATH_VAR}/${id}${PATH_VIDEOS}?api_key=${API_KEY}&language=en-US`
	);

	const trailer = results.find(item => item.type === 'Trailer') ||
		results[0] || {
			id: null,
			key: null,
			size: null
		};

	return trailer;
};

export const getDetails = async (id, type) => {
	const PATH_VAR = type === 'movies' ? PATH_MOVIE : PATH_TV;
	const { data } = await axios.get(
		`${PATH_BASE}${PATH_VAR}/${id}?api_key=${API_KEY}&language=en-US`
	);

	return {
		...data,
		poster_path: `${IMG_BASE}/original${data.poster_path}`,
		backdrop_path: `${IMG_BASE}/original${data.backdrop_path}`
	};
};

export const getCredits = async (id, type) => {
	const PATH_VAR = type === 'movies' ? PATH_MOVIE : PATH_TV;
	const { data } = await axios.get(
		`${PATH_BASE}${PATH_VAR}/${id}${PATH_CREDITS}?api_key=${API_KEY}&language=en-US`
	);

	return data;
};
