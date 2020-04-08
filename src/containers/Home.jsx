import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// Components
import { BaseContainer } from '../components/shared';
import LeftDrawer from '../components/LeftDrawer';
import ClickableLeftDrawer from '../components/ClickableLeftDrawer';
import RightDrawer from '../components/RightDrawer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

const HomeContainer = styled(BaseContainer)`
	display: grid;
	/* fit-content() does not work for some reason. */
	grid-template-columns: 15% minmax(200px, auto) 20%;
	grid-template-rows: 50px 1fr;
`;

const Home = ({ nowPlaying, topRated }) => {
	return (
		<HomeContainer>
			<Header />
			<LeftDrawer />
			<ClickableLeftDrawer />
			<RightDrawer />
			<MainContent />
		</HomeContainer>
	);
};

const mapStateToProps = state => ({
	nowPlaying: state.movies.nowPlaying,
	topRated: state.movies.topRated
});

export default connect(mapStateToProps)(Home);
