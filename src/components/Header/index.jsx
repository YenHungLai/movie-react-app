import React from 'react';
import { HeaderContainer } from './style';
import { connect } from 'react-redux';
import { setHomePageContent } from '../../action/uiAction';
// Components
import Navbar from '../Navbar';
import Search from '../Search';

const Header = ({ showLeftDrawer, popularMovies, popularSerials }) => {
	// TODO: what should be the pool.
	const contentPool = popularMovies.concat(popularSerials);

	return (
		<HeaderContainer>
			<Search contentPool={contentPool} />
			<Navbar />
		</HeaderContainer>
	);
};

const mapStateToProps = state => ({
	showLeftDrawer: state.ui.showLeftDrawer,
	popularMovies: state.movies.popular,
	popularSerials: state.serials.popular
});

const mapDispatchToProps = {
	setHomePageContent
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
