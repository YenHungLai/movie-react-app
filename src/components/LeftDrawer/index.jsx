import React from 'react';
import {
	LeftDrawerContainer,
	CloseBtn,
	ContentContainer,
	Title,
	NavContainer,
	NavLinks,
} from './style';
import { connect } from 'react-redux';
import { setShowLeftDrawer } from '../../action/uiAction';

const LeftDrawer = ({
	showLeftDrawer,
	setShowLeftDrawer,
	homePageContent,
	windowDimension,
}) => {
	const handleClick = () => {
		setShowLeftDrawer(false);
	};

	const contentName = homePageContent === 'movies' ? 'movies' : 'series';
	const { innerWidth } = windowDimension;

	return (
		<LeftDrawerContainer
			showLeftDrawer={showLeftDrawer}
			isStatic={innerWidth >= 1100}
		>
			<CloseBtn onClick={handleClick} show={innerWidth <= 1100}>
				<i className='fas fa-chevron-left fa-lg'></i>
			</CloseBtn>
			<ContentContainer>
				<Title>categories</Title>
				<NavContainer>
					<NavLinks to={`/gallery/${homePageContent}/new-releases`}>
						new releases
					</NavLinks>
					<NavLinks to={`/gallery/${homePageContent}/coming-soon`}>
						coming soon
					</NavLinks>
					<NavLinks to={`/gallery/${homePageContent}/popular`}>
						popular {contentName}
					</NavLinks>
				</NavContainer>
			</ContentContainer>
		</LeftDrawerContainer>
	);
};

const mapStateToProps = (state) => ({
	showLeftDrawer: state.ui.showLeftDrawer,
	homePageContent: state.ui.homePageContent,
	windowDimension: state.ui.windowDimension,
});

const mapDispatchToProps = {
	setShowLeftDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
