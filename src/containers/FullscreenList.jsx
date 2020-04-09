import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Components
import { BaseContainer, HoverInput } from '../components/shared';
import FullscreenGrid from '../components/FullscreenGrid';

const FullscreenListContainer = styled(BaseContainer)`
	padding: 1em;
	color: white;
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
	const [state, setState] = useState([]);

	useEffect(() => {
		switch (`${type}/${content}`) {
			case 'movies/new-releases':
				setState(nowPlayingMovies);
				break;
			case 'movies/coming-soon':
				setState(upcomingMovies);
				break;
			case 'movies/popular':
				setState(popularMovies);
				break;
			case 'serials/new-releases':
				setState(onTheAirSerials);
				break;
			case 'serials/coming-soon':
				setState(airingTodaySerials);
				break;
			case 'serials/popular':
				setState(popularSerials);
				break;
			default:
				break;
		}
	});

	return (
		<FullscreenListContainer>
			{/* TODO: put this in a component and add search feature. */}
			<HoverInput>
				<input type='search' />
				<i className='fa fa-search'></i>
			</HoverInput>
			<FullscreenGrid content={state} type={type} />
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
