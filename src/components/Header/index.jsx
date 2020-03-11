import React from 'react';
import { HeaderContainer } from './styled';
import { connect } from 'react-redux';
import { setHomePageContent } from '../../action/uiAction';
// Components
import Navbar from '../Navbar';
import Search from '../Search';
import HamburgerMenu from '../HamburgerMenu';

const Header = ({ showLeftDrawer }) => {
	return (
		<HeaderContainer showLeftDrawer={showLeftDrawer}>
			<HamburgerMenu />
			<Search />
			<Navbar />
		</HeaderContainer>
	);
};

const mapStateToProps = state => ({
	showLeftDrawer: state.ui.showLeftDrawer
});

const mapDispatchToProps = {
	setHomePageContent
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
