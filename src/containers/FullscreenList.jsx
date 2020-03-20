import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Components
import { BaseContainer } from '../components/shared';

const FullscreenListContainer = styled(BaseContainer)`
	padding: 1em;
	color: white;
`;

const MoviesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	grid-column-gap: 6px;
`;

const MovieWrapper = styled.div``;
const Title = styled.p``;
const Info = styled.div``;

const FullscreenList = ({
	nowPlayingMovies,
	popularMovies,
	upcomingMovies,
	onTheAirSerials,
	popularSerials,
	airingTodaySerials
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
			<MoviesContainer>
				{state.map(item => (
					<MovieWrapper>
						<Link to={`/${type}/${item.id}`}>
							<img src={item.poster_path} width='100px' />
						</Link>
						<Title>{item.title || item.name}</Title>
						<Info>
							<time>{item.release_date}</time>
						</Info>
					</MovieWrapper>
				))}
			</MoviesContainer>
		</FullscreenListContainer>
	);
};

export default connect(state => ({
	nowPlayingMovies: state.movies.nowPlaying,
	popularMovies: state.movies.popular,
	upcomingMovies: state.movies.upcoming,
	onTheAirSerials: state.serials.onTheAir,
	popularSerials: state.serials.popular,
	airingTodaySerials: state.serials.airingToday
}))(FullscreenList);
