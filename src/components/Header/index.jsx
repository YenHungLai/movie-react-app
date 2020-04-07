import React from 'react';
import { connect } from 'react-redux';
import { setHomePageContent } from '../../action/uiAction';
// Components
import Navbar from '../Navbar';
import Search from '../Search';
import { HeaderContainer, PremiumIcon } from './style';

const Header = ({ popularMovies, popularSerials }) => {
	// TODO: what should be the pool.
	const contentPool = popularMovies.concat(popularSerials);

	return (
		<HeaderContainer>
			<Search contentPool={contentPool} />
			<Navbar />
			<PremiumIcon>
				<i class='far fa-gem'></i>
				<p>premium</p>
			</PremiumIcon>
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
