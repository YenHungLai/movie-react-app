import React from 'react';
import { connect } from 'react-redux';
// Components
import BaseContainer from '../components/BaseContainer';
import LeftDrawer from '../components/LeftDrawer';
import RightDrawer from '../components/RightDrawer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

const Movies = ({ nowPlaying, topRated }) => {
	return (
		<BaseContainer>
			<Header />
			<LeftDrawer />
			<RightDrawer />
			<MainContent />
		</BaseContainer>
	);
};

const mapStateToProps = state => ({
	nowPlaying: state.movies.nowPlaying,
	topRated: state.movies.topRated
});

export default connect(mapStateToProps)(Movies);
