import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setHomePageContent } from '../action/uiAction';
// Components
import Navbar from './Navbar';
import Search from './Search';
import HamburgerMenu from './HamburgerMenu';

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	color: #999;
	padding: 0 1em;
	transition: padding 0.2s ease-in;
	padding-left: ${({ showLeftDrawer }) => (showLeftDrawer ? '14em' : '1em')};
`;

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
