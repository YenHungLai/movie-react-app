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
`;

const Header = ({ setHomePageContent }) => {
	return (
		<HeaderContainer>
			<HamburgerMenu />
			<Search />
			<Navbar />
		</HeaderContainer>
	);
};

const mapDispatchToProps = {
	setHomePageContent
};

export default connect(null, mapDispatchToProps)(Header);
