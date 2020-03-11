import styled from 'styled-components';

const NavbarContainer = styled.div`
	flex: 0.8;
	display: flex;
	justify-content: space-around;
`;

const NavLink = styled.a`
	color: ${({ active }) => (active ? '#66c5da' : 'inherit')};
	font-weight: bold;
	text-transform: capitalize;
	transition: color 0.3s ease-out;
	cursor: pointer;
`;

export { NavbarContainer, NavLink };
