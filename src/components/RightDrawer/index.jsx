import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RightDrawerContainer, Title } from './styled';
// Components
import DrawerItem from './DrawerItem';

const RightDrawer = ({
	popularMovies,
	nowPlayingMovies,
	popularSerials,
	onTheAirSerials,
	homePageContent
}) => {
	// Better way to do this??
	const topView =
		homePageContent === 'movies'
			? popularMovies.sort((a, b) => b.popularity - a.popularity)[0]
			: popularSerials.sort((a, b) => b.popularity - a.popularity)[0];
	const latests =
		homePageContent === 'movies'
			? nowPlayingMovies
					.sort(
						(a, b) =>
							new Date(a.release_date) - new Date(b.release_date)
					)
					.slice(0, 2)
			: onTheAirSerials
					.sort(
						(a, b) =>
							new Date(a.release_date) - new Date(b.release_date)
					)
					.slice(0, 2);

	return (
		<RightDrawerContainer>
			<Title>top view of today</Title>
			{topView && (
				<DrawerItem
					content={topView}
					homePageContent={homePageContent}
				/>
			)}
			<Title>latest movies</Title>
			{latests.map(item => (
				<DrawerItem
					content={item}
					homePageContent={homePageContent}
					key={item.id}
				/>
			))}
		</RightDrawerContainer>
	);
};

const mapStateToProps = state => ({
	popularMovies: state.movies.popular,
	nowPlayingMovies: state.movies.nowPlaying,
	popularSerials: state.serials.popular,
	onTheAirSerials: state.serials.onTheAir,
	homePageContent: state.ui.homePageContent
});

export default connect(mapStateToProps)(RightDrawer);
