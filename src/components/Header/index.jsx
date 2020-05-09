import React from 'react';
import { connect } from 'react-redux';
import { setHomePageContent } from '../../action/uiAction';
// Components
import Navbar from '../Navbar';
import Search from '../Search';
import HamburgerMenu from '../HamburgerMenu';
import { HeaderContainer, PremiumIcon } from './style';

const Header = ({ popularMovies, popularSerials, windowDimension }) => {
	// TODO: what should be the pool.
	const contentPool = popularMovies.concat(popularSerials);
	const { innerWidth } = windowDimension;

	return (
		<HeaderContainer>
			<Search contentPool={contentPool} />
			<Navbar />
			<PremiumIcon>
				<i className='far fa-gem'></i>
				<p>premium</p>
			</PremiumIcon>
			{innerWidth <= 1100 && <HamburgerMenu />}
		</HeaderContainer>
	);
};

const mapStateToProps = (state) => ({
	showLeftDrawer: state.ui.showLeftDrawer,
	popularMovies: state.movies.popular,
	popularSerials: state.serials.popular,
	windowDimension: state.ui.windowDimension,
});

const mapDispatchToProps = {
	setHomePageContent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
