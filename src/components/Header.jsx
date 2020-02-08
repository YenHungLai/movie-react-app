import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const HeaderContainer = styled.div`
	border: 1px white solid;
	color: white;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Link to='/serials'>serials</Link>
			<Link to='/'>movies</Link>
		</HeaderContainer>
	);
};

export default Header;
