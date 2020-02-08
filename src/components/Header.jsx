import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setHomePageContent } from '../action/uiAction';

const HeaderContainer = styled.div`
	border: 1px white solid;
	color: white;
`;

const Header = ({ setHomePageContent }) => {
	return (
		<HeaderContainer>
			<a onClick={setHomePageContent.bind(this, 'serials')}>serials</a>
			<a onClick={setHomePageContent.bind(this, 'movies')}>movies</a>
		</HeaderContainer>
	);
};

const mapDispatchToProps = {
	setHomePageContent
};

export default connect(null, mapDispatchToProps)(Header);
