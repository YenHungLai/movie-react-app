/**
 * TODO:
 * - Search component text overflow.
 * - Fullscreen list grid container center.
 * - Responsive design.
 * - Left drawer content.
 * - Loading screen before API response.
 */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
	getUpComingMovies,
	getAiringTodaySerials,
} from './services';
// Assets
import './App.css';
// Components
import Home from './containers/Home';
import FullscreenList from './containers/FullscreenList';
import DetailsPage from './containers/DetailsPage';
import FullScreenVideoPlayer from './components/FullScreenVideoPlayer';

const RootContainer = styled.div``;

const App = ({
	setNowPlayingMovies,
	setTopRatedMovies,
	setPopularMovies,
	setUpcomingMovies,
	setOnTheAirSerials,
	setTopRatedSerials,
	setPopularSerials,
	setAiringTodaySerials,
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
			const airingTodaySerials = await getAiringTodaySerials();
			setNowPlayingMovies(nowPlayingMovies);
			setTopRatedMovies(topRatedMovies);
			setPopularMovies(popularMovies);
			setUpcomingMovies(upcomingMovies);
			setOnTheAirSerials(onTheAirSerials);
			setAiringTodaySerials(airingTodaySerials);
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
					<Route
						path='/gallery/:type/:content'
						component={FullscreenList}
					/>
					<Route
						path='/trailer/:type/:id'
						component={FullScreenVideoPlayer}
					/>
					<Route path='/:type/:id' component={DetailsPage} />
				</Switch>
			</RootContainer>
		</Router>
	);
};

const mapDispatchToProps = {
	...moviesActions,
	...serialsActions,
};

export default connect(null, mapDispatchToProps)(App);
