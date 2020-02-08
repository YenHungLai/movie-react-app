import React from 'react';
import { connect } from 'react-redux';
// Components
import BaseContainer from '../components/BaseContainer';
import LeftDrawer from '../components/LeftDrawer';
import RightDrawer from '../components/RightDrawer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

const Serials = ({ onTheAir, topRated }) => {
	return (
		<BaseContainer>
			<Header />
			<LeftDrawer />
			<RightDrawer />
			<MainContent nowPlaying={onTheAir} topRated={topRated} />
		</BaseContainer>
	);
};

const mapStateToProps = state => ({
	onTheAir: state.serials.onTheAir,
	topRated: state.serials.topRated
});

export default connect(mapStateToProps)(Serials);
