import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// Components
import BaseContainer from '../components/BaseContainer';
import LeftDrawer from '../components/LeftDrawer';
import RightDrawer from '../components/RightDrawer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

const HomeContainer = styled(BaseContainer)`
	display: grid;
	grid-template-columns: 85% 15%;
	grid-template-rows: 50px 1fr;
`;

const Home = ({ nowPlaying, topRated }) => {
	return (
		<HomeContainer>
			<Header />
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
