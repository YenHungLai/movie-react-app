/**
 * TODO:
 * - Search component text overflow.
 * - Fullscreen list grid container center.
 * - Responsive design.
 * - Left drawer content.
 * - Loading screen before API response.
 */
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as movieActions from './action/moviesAction';
import * as serialActions from './action/serialsAction';
// Assets
import './App.css';
// Components
import Home from './containers/Home';
import FullscreenList from './containers/FullscreenList';
import DetailsPage from './containers/DetailsPage';
import FullScreenVideoPlayer from './components/FullScreenVideoPlayer';

const RootContainer = styled.div``;

const App = (props) => {
	props.setNowPlayingMovies();
	props.setTopRatedMovies();
	props.setPopularMovies();
	props.setUpcomingMovies();
	props.setOnTheAirSerials();
	props.setTopRatedSerials();
	props.setPopularSerials();
	props.setAiringTodaySerials();

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

export default connect(null, { ...movieActions, ...serialActions })(App);
