import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const SearchContainer = styled.div`
	flex: 0.2;
`;

const Search = () => {
	return (
		<SearchContainer>
			<i class='fas fa-search'></i>
			<input type='text' placeholder='Search' />
		</SearchContainer>
	);
};

const mapStateToProps = state => ({
	nowPlayingMovies: state.movies.nowPlaying,
	topRatedMovies: state.movies.topRated,
	onTheAirSerials: state.serials.onTheAir,
	topRatedSerials: state.serials.topRated,
	homePageContent: state.ui.homePageContent
});

export default connect(mapStateToProps)(Search);
