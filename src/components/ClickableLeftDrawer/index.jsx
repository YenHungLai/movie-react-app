import React from 'react';
import {
	LeftDrawerContainer,
	CloseBtn,
	ContentContainer,
	Title,
	NavContainer,
	NavLinks
} from './style';
import { connect } from 'react-redux';
import { setShowLeftDrawer } from '../../action/uiAction';
import HamburgerMenu from '../HamburgerMenu';

// TODO: make this the clickable drawer and create a base drawer.
const ClickableLeftDrawer = ({ showLeftDrawer, setShowLeftDrawer, homePageContent }) => {
	const handleClick = () => {
		setShowLeftDrawer(false);
	};

	const contentName = homePageContent === 'movies' ? 'movies' : 'series';

	return (
		<LeftDrawerContainer showLeftDrawer={showLeftDrawer} test id='test'>
			<CloseBtn onClick={handleClick}>
				<i className='fas fa-chevron-left fa-lg'></i>
			</CloseBtn>
			<ContentContainer>
				<Title>categories</Title>
				<NavContainer>
					<NavLinks to={`/gallery/${homePageContent}/new-releases`}>
						new releases
					</NavLinks>
					<NavLinks to={`/gallery/${homePageContent}/coming-soon`}>coming soon</NavLinks>
					<NavLinks to={`/gallery/${homePageContent}/popular`}>
						popular {contentName}
					</NavLinks>
					<NavLinks to='/gallery/trailers'>trailers</NavLinks>
					{/* <NavLinks>genres</NavLinks> */}
				</NavContainer>
			</ContentContainer>
		</LeftDrawerContainer>
	);
};

const mapStateToProps = state => ({
	showLeftDrawer: state.ui.showLeftDrawer,
	homePageContent: state.ui.homePageContent
});

const mapDispatchToProps = {
	setShowLeftDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickableLeftDrawer);
