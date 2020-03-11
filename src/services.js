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
	PATH_TV,
	PATH_VIDEOS
} from './constants';

export const getNowPlayingMovies = async () => {
	const {
		data: { results }
	} = await axios.get(
		`${PATH_BASE}${PATH_MOVIE}${PATH_NOWPLAYING}?api_key=${API_KEY}&language=en-US`
	);

	// Add trailer info.
	const promises = results.map(async item => {
		const {
			data: { results }
		} = await axios.get(
			`${PATH_BASE}${PATH_MOVIE}/${item.id}${PATH_VIDEOS}?api_key=${API_KEY}&language=en-US`
		);
		const trailer = results.find(item => item.type === 'Trailer');

		return {
			...item,
			poster_path: `${IMG_BASE}${IMG_SIZE}${item.poster_path}`,
			backdrop_path: `${IMG_BASE}${IMG_SIZE}${item.backdrop_path}`,
			trailer
		};
	});

	return Promise.all(promises).then(res => res);
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
