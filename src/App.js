import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './action/moviesAction';
import { getNowPlayingMovies, getTopRatedMovies } from './services';
// Components
import Movies from './containers/Movies';

const RootContainer = styled.div`
	background: #999;
	height: 100vh;
`;

const App = ({ temp, setNowPlaying, setTopRated }) => {
	useEffect(() => {
		const getData = async () => {
			const nowPlaying = await getNowPlayingMovies();
			const topRated = await getTopRatedMovies();
			setNowPlaying(nowPlaying);
			setTopRated(topRated);
		};
		getData();
	}, []);

	return (
		<Router>
			<RootContainer>
				<Switch>
					<Route path='/' component={Movies} />
				</Switch>
			</RootContainer>
		</Router>
	);
};

const mapStateToProps = {};

const mapDispatchToProps = {
	...actions
};

export default connect(null, mapDispatchToProps)(App);
