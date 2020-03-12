import React from 'react';
import { connect } from 'react-redux';
import { RightDrawerContainer } from './styled';

const RightDrawer = ({ popularMovies, popularSerials, homePageContent }) => {
	const mostPopular = popularMovies.sort((a, b) => b.popularity - a.popularity)[0];
	console.log(mostPopular);
	console.log(homePageContent);

	return (
		<RightDrawerContainer>
			<p>RIGHT DRAWER</p>
		</RightDrawerContainer>
	);
};

const mapStateToProps = state => ({
	popularMovies: state.movies.popular,
	popularSerials: state.serials.popular,
	homePageContent: state.ui.homePageContent
});

export default connect(mapStateToProps)(RightDrawer);
