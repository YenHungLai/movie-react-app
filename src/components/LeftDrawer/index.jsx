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

const LeftDrawer = ({ showLeftDrawer, setShowLeftDrawer, homePageContent }) => {
	const handleClick = () => {
		setShowLeftDrawer(false);
	};

	return (
		<LeftDrawerContainer showLeftDrawer={showLeftDrawer} test id='test'>
			<h2>LEFT DRAWER</h2>
			<CloseBtn onClick={handleClick}>
				<i className='fas fa-chevron-left fa-lg'></i>
			</CloseBtn>
			<ContentContainer>
				<Title>categories</Title>
				<NavContainer>
					<NavLinks>new releases</NavLinks>
					<NavLinks>coming soon</NavLinks>
					<NavLinks>popular {homePageContent}</NavLinks>
					<NavLinks>trailers</NavLinks>
					<NavLinks>genres</NavLinks>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
