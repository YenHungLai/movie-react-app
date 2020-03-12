import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../../services';
import {
	RightDrawerContainer,
	Container,
	Title,
	ContentWrapper
} from './styled';

// TODO: separate file.
const MovieContent = ({ top = {}, latests = [] }) => {
	const [details, setDetails] = useState({});
	useEffect(() => {
		getDetails(top.id, 'movies').then(res => setDetails(res));
	}, []);
	console.log(details);

	return (
		<Container>
			<Title>top view of today</Title>
			{/* Make API inside this component?? */}
			<ContentWrapper>
				<img src={top.backdrop_path} alt={top.title} width='90%' />
				<h4>{top.title}</h4>
				<time>{top.release_date}</time>
				<p>duration: {details.runtime} minutes</p>
			</ContentWrapper>
			<Title>latest movies</Title>
			{latests.map(latest => (
				<ContentWrapper>
					<img
						src={latest.backdrop_path}
						alt={latest.title}
						width='90%'
					/>
					<h4>{latest.title}</h4>
					<time>{latest.release_date}</time>
				</ContentWrapper>
			))}
		</Container>
	);
};

const RightDrawer = ({
	popularMovies,
	nowPlayingMovies,
	popularSerials,
	homePageContent
}) => {
	const topView = popularMovies.sort(
		(a, b) => b.popularity - a.popularity
	)[0];
	const latests = nowPlayingMovies
		.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
		.slice(0, 2);

	return (
		<RightDrawerContainer>
			{/* TODO: make this a generic component, not just for movies. */}
			<MovieContent top={topView} latests={latests} />
		</RightDrawerContainer>
	);
};

const mapStateToProps = state => ({
	popularMovies: state.movies.popular,
	nowPlayingMovies: state.movies.nowPlaying,
	popularSerials: state.serials.popular,
	homePageContent: state.ui.homePageContent
});

export default connect(mapStateToProps)(RightDrawer);
