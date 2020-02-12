import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setShowLeftDrawer } from '../action/uiAction';

const HamburgerMenuContainer = styled.div`
	margin-right: 1em;
	& span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;
		background: #cdcdcd;
		border-radius: 3px;
		z-index: 1;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
	}
	& span:first-child {
		transform-origin: 0% 0%;
	}
	& span:nth-last-child(2) {
		transform-origin: 0% 100%;
	}
	& input {
		width: 33px;
		height: 28px;
		opacity: 0;
		z-index: 2;
		cursor: pointer;
		position: absolute;
	}
	& input:checked ~ span {
		opacity: 1;
		transform: rotate(-45deg) translate(0, -1px);
		background: white;
	}
	& input:checked ~ span:nth-last-child(2) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}
	& input:checked ~ span:nth-last-child(3) {
		transform: rotate(45deg) translate(-2px, -1px);
	}
`;

const HamburgerMenu = ({ showLeftDrawer, setShowLeftDrawer }) => {
	const handleChange = e => {
		setShowLeftDrawer(e.target.checked);
	};

	return (
		<HamburgerMenuContainer role='navigation'>
			<div id='menuToggle'>
				<input
					type='checkbox'
					checked={showLeftDrawer}
					onChange={handleChange}
				/>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</HamburgerMenuContainer>
	);
};

const mapStateToProps = state => ({
	showLeftDrawer: state.ui.showLeftDrawer
});

const mapDispatchToProps = {
	setShowLeftDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu);
