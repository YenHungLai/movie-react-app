import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setHomePageContent } from '../action/uiAction';
// Components
import Navbar from './Navbar';
import Search from './Search';

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	border: 1px white solid;
	color: white;
`;

const Header = ({ setHomePageContent }) => {
	return (
		<HeaderContainer>
			<Search />
			<Navbar />
		</HeaderContainer>
	);
};

const mapDispatchToProps = {
	setHomePageContent
};

export default connect(null, mapDispatchToProps)(Header);
