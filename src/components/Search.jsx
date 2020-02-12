import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const SearchContainer = styled.div`
	flex: 0.2;
	display: flex;
	position: relative;
	align-items: center;
	& > i {
		margin-right: 0.5em;
	}
`;

const MovieSearch = styled.input`
	background-color: transparent;
	border: none;
	outline: none;
	color: white;
	padding: 5px 0;
	&:focus {
		border-bottom: 1px white solid;
	}
`;

const SuggestionsContainer = styled.div`
	border: red 1px solid;
	position: absolute;
	bottom: 0;
	width: 100%;
`;

const Suggestions = ({
	nowPlayingMovies,
	topRatedMovies,
	onTheAirSerials,
	topRatedSerials,
	query,
	movies,
	serials
}) => {
	const contentPool = [
		...nowPlayingMovies,
		...topRatedMovies,
		...onTheAirSerials,
		...topRatedSerials
	];

	const results = contentPool.filter(item => {
		if (item.hasOwnProperty('title'))
			return item.title.toLowerCase().includes(query);
		return item.name.toLowerCase().includes(query);
	});
	console.log(results);

	return (
		<SuggestionsContainer>
			{results.map(item => (
				<ul>
					<li>
						<img src={item.backdrop_path} height='100px' />
					</li>
				</ul>
			))}
		</SuggestionsContainer>
	);
};

const Search = props => {
	const [state, setState] = useState();

	const handleChange = e => {
		// TODO: sanitize input
		setState(e.target.value);
	};

	return (
		<SearchContainer>
			<i className='fas fa-search'></i>
			<MovieSearch
				onChange={handleChange}
				type='text'
				placeholder='Search'
			/>
			<Suggestions {...props} query={state} />
		</SearchContainer>
	);
};

const mapStateToProps = state => ({
	nowPlayingMovies: state.movies.nowPlaying,
	topRatedMovies: state.movies.topRated,
	onTheAirSerials: state.serials.onTheAir,
	topRatedSerials: state.serials.topRated,
	homePageContent: state.ui.homePageContent,
	movies: state.movies,
	serials: state.serials
});

export default connect(mapStateToProps)(Search);
