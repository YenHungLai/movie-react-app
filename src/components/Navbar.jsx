import React, { useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setHomePageContent } from '../action/uiAction';

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

const Navbar = ({ homePageContent, setHomePageContent }) => {
	// Might need these later.
	const moviesRef = useRef();
	const serialsRef = useRef();

	const handleClick = e => {
		setHomePageContent(e.target.id);
	};

	return (
		<NavbarContainer>
			<NavLink
				active={homePageContent === 'movies' ? true : false}
				ref={moviesRef}
				id='movies'
				onClick={handleClick}
			>
				movies
			</NavLink>
			<NavLink
				active={homePageContent === 'serials' ? true : false}
				ref={serialsRef}
				id='serials'
				onClick={handleClick}
			>
				serials
			</NavLink>
		</NavbarContainer>
	);
};

const mapStateToProps = state => ({
	homePageContent: state.ui.homePageContent
});

const mapDispatchToProps = {
	setHomePageContent
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
