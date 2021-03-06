import React, { useRef } from 'react';
import { NavbarContainer, NavLink } from './style';
import { connect } from 'react-redux';
import { setHomePageContent } from '../../action/uiAction';

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
				series
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
