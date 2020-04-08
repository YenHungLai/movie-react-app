import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LeftDrawerContainer = styled.div`
	color: white;
	background-color: #08090a;
	height: 100%;
	width: 15%; /* Same as left drawer. */
	padding: 1em 2em;
	transition: all 0.2s ease-in-out;
	position: absolute;
	left: ${({ showLeftDrawer }) => (showLeftDrawer ? 0 : '-15%')};
	opacity: ${({ showLeftDrawer }) => (showLeftDrawer ? 1 : 0)};
	z-index: 10;
`;

const CloseBtn = styled.button`
	color: #999;
	position: absolute;
	top: 20px;
	right: 30px;
`;

const ContentContainer = styled.div`
	margin-top: 2em;
`;

const Title = styled.p`
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

const NavContainer = styled.nav`
	display: flex;
	flex-direction: column;
`;

const NavLinks = styled(Link)`
	color: #999;
	margin: 8px 0;
	text-transform: capitalize;
	text-decoration: none;
`;

export {
	LeftDrawerContainer,
	CloseBtn,
	ContentContainer,
	Title,
	NavContainer,
	NavLinks
};
