import React from 'react';
import { LeftDrawerContainer, Title } from './style';
import { connect } from 'react-redux';
import { setShowLeftDrawer } from '../../action/uiAction';
import HamburgerMenu from '../HamburgerMenu';

const ClickableLeftDrawer = ({ showLeftDrawer, homePageContent }) => {
	return (
		<LeftDrawerContainer showLeftDrawer={showLeftDrawer} test id='test'>
			<HamburgerMenu />
		</LeftDrawerContainer>
	);
};

const mapStateToProps = (state) => ({
	showLeftDrawer: state.ui.showLeftDrawer,
	homePageContent: state.ui.homePageContent,
});

const mapDispatchToProps = {
	setShowLeftDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickableLeftDrawer);
