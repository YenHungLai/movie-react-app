import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setHomePageContent } from '../action/uiAction';
// Components
import Navbar from './Navbar';

const HeaderContainer = styled.div`
	border: 1px white solid;
	color: white;
`;

const Header = ({ setHomePageContent }) => {
	return (
		<HeaderContainer>
			<Navbar />
		</HeaderContainer>
	);
};

const mapDispatchToProps = {
	setHomePageContent
};

export default connect(null, mapDispatchToProps)(Header);
