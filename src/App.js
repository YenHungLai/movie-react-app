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
import Movies from './containers/Movies';
import Serials from './containers/Serials';

const RootContainer = styled.div`
	background: #999;
	height: 100vh;
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
					<Route exact path='/' component={Movies} />
					<Route path='/serials' component={Serials} />
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
