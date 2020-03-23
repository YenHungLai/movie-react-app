import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// Components
import { BaseContainer } from '../components/shared';
import LeftDrawer from '../components/LeftDrawer';
import RightDrawer from '../components/RightDrawer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

// FIXME: re-structure layout.
const HomeContainer = styled(BaseContainer)`
	display: grid;
	grid-template-columns: 20% 60% 20%;
	grid-template-rows: 50px 1fr;
`;

const Home = ({ nowPlaying, topRated }) => {
	return (
		<HomeContainer>
			<Header />
			<LeftDrawer />
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
