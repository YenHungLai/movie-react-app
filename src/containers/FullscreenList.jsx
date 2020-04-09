import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Components
import { BaseContainer } from '../components/shared';
import FullscreenGrid from '../components/FullscreenGrid';
import GridSearch from '../components/GridSearch';
import BackButton from '../components/BackButton';

const FullscreenListContainer = styled(BaseContainer)`
	padding: 1em;
	min-height: 100vh;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FullscreenList = ({
	nowPlayingMovies,
	popularMovies,
	upcomingMovies,
	onTheAirSerials,
	popularSerials,
	airingTodaySerials,
}) => {
	const { type, content } = useParams();
	const [query, setQuery] = useState('');
	const contentToDisplay = useRef([]);

	switch (`${type}/${content}`) {
		case 'movies/new-releases':
			contentToDisplay.current = nowPlayingMovies;
			break;
		case 'movies/coming-soon':
			contentToDisplay.current = upcomingMovies;
			break;
		case 'movies/popular':
			contentToDisplay.current = popularMovies;
			break;
		case 'serials/new-releases':
			contentToDisplay.current = onTheAirSerials;
			break;
		case 'serials/coming-soon':
			contentToDisplay.current = airingTodaySerials;
			break;
		case 'serials/popular':
			contentToDisplay.current = popularSerials;
			break;
		default:
			break;
	}

	return (
		<FullscreenListContainer>
			<BackButton />
			<GridSearch setQuery={setQuery} />
			<FullscreenGrid content={contentToDisplay.current} type={type} query={query} />
		</FullscreenListContainer>
	);
};

export default connect((state) => ({
	nowPlayingMovies: state.movies.nowPlaying,
	popularMovies: state.movies.popular,
	upcomingMovies: state.movies.upcoming,
	onTheAirSerials: state.serials.onTheAir,
	popularSerials: state.serials.popular,
	airingTodaySerials: state.serials.airingToday,
}))(FullscreenList);
