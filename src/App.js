/**
 * TODO:
 * - Movie details page
 */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as moviesActions from './action/moviesAction';
import * as serialsActions from './action/serialsAction';
import {
	getNowPlayingMovies,
	getTopRatedMovies,
	getPopularMovies,
	getOnTheAirSerials,
	getTopRatedSerials,
	getPopularSerials,
	getLatestMovies,
	getUpComingMovies
} from './services';
// Components
import Home from './containers/Home';
import FullscreenList from './containers/FullscreenList';
import DetailsPage from './containers/DetailsPage';
import FullScreenVideoPlayer from './components/FullScreenVideoPlayer';

const RootContainer = styled.div`
	background: #999;
	height: 100vh;
`;

const App = ({
	setNowPlayingMovies,
	setTopRatedMovies,
	setPopularMovies,
	setUpcomingMovies,
	setOnTheAirSerials,
	setTopRatedSerials,
	setPopularSerials
}) => {
	useEffect(() => {
		const getData = async () => {
			const nowPlayingMovies = await getNowPlayingMovies();
			const topRatedMovies = await getTopRatedMovies();
			const popularMovies = await getPopularMovies();
			const upcomingMovies = await getUpComingMovies();
			const onTheAirSerials = await getOnTheAirSerials();
			const topRatedSerials = await getTopRatedSerials();
			const popularSerials = await getPopularSerials();
			setNowPlayingMovies(nowPlayingMovies);
			setTopRatedMovies(topRatedMovies);
			setPopularMovies(popularMovies);
			setUpcomingMovies(upcomingMovies);
			setOnTheAirSerials(onTheAirSerials);
			setTopRatedSerials(topRatedSerials);
			setPopularSerials(popularSerials);
		};
		getData();
	}, []);

	return (
		<Router>
			<RootContainer>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/gallery/:type/:content' component={FullscreenList} />
					<Route path='/:type/:id' component={DetailsPage} />
					<Route path='/trailer/:type/:id' component={FullScreenVideoPlayer} />
				</Switch>
			</RootContainer>
		</Router>
	);
};

const mapStateToProps = {};

const mapDispatchToProps = {
	...moviesActions,
	...serialsActions
};

export default connect(null, mapDispatchToProps)(App);
