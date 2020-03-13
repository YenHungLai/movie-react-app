/**
 * TODO:
 * - Implement left drawer
 * - Implement search bar
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
	getLatestMovies
} from './services';
// Components
import Home from './containers/Home';
import FullscreenList from './containers/FullscreenList';
import FullScreenVideoPlayer from './components/FullScreenVideoPlayer';

const RootContainer = styled.div`
	background: #999;
	padding: 1em 0;
`;

const App = ({
	setNowPlayingMovies,
	setTopRatedMovies,
	setPopularMovies,
	setOnTheAirSerials,
	setTopRatedSerials,
	setPopularSerials
}) => {
	useEffect(() => {
		const getData = async () => {
			const nowPlayingMovies = await getNowPlayingMovies();
			const topRatedMovies = await getTopRatedMovies();
			const popularMovies = await getPopularMovies();
			const onTheAirSerials = await getOnTheAirSerials();
			const topRatedSerials = await getTopRatedSerials();
			const popularSerials = await getPopularSerials();
			setNowPlayingMovies(nowPlayingMovies);
			setTopRatedMovies(topRatedMovies);
			setPopularMovies(popularMovies);
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
					<Route path='/test' component={FullscreenList} />
					<Route path='/:type/:id' component={FullscreenList} />
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
