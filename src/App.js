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
	getOnTheAirSerials,
	getTopRatedSerials
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
	setOnTheAirSerials,
	setTopRatedSerials
}) => {
	useEffect(() => {
		const getData = async () => {
			const nowPlayingMovies = await getNowPlayingMovies();
			const topRatedMovies = await getTopRatedMovies();
			const onTheAirSerials = await getOnTheAirSerials();
			const topRatedSerials = await getTopRatedSerials();
			setNowPlayingMovies(nowPlayingMovies);
			setTopRatedMovies(topRatedMovies);
			setOnTheAirSerials(onTheAirSerials);
			setTopRatedSerials(topRatedSerials);
		};
		getData();
	}, []);

	return (
		<Router>
			<RootContainer>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/test' component={FullscreenList} />
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
