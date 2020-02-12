import React from 'react';
import { connect } from 'react-redux';
import { setShowLeftDrawer } from '../action/uiAction';
import styled from 'styled-components';

const LeftDrawerContainer = styled.div`
	color: white;
	background-color: #08090a;
	height: 100%;
	width: 250px;
	padding: 0.5em 1em;
	transition: all 0.2s ease-in-out;
	position: absolute;
	left: ${({ showLeftDrawer }) => (showLeftDrawer ? 0 : '-250px')};
	opacity: ${({ showLeftDrawer }) => (showLeftDrawer ? 1 : 0)};
	z-index: 10;
`;

const CloseBtn = styled.button`
	color: #999;
	position: absolute;
	top: 20px;
	right: 10px;
`;

const LeftDrawer = ({ showLeftDrawer, setShowLeftDrawer }) => {
	const handleClick = () => {
		setShowLeftDrawer(false);
	};
	console.log(showLeftDrawer);
	return (
		<LeftDrawerContainer showLeftDrawer={showLeftDrawer} test id='test'>
			<h2>LEFT DRAWER</h2>
			<CloseBtn onClick={handleClick}>
				<i className='fas fa-chevron-left fa-lg'></i>
			</CloseBtn>
		</LeftDrawerContainer>
	);
};

const mapStateToProps = state => ({
	showLeftDrawer: state.ui.showLeftDrawer
});

const mapDispatchToProps = {
	setShowLeftDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
