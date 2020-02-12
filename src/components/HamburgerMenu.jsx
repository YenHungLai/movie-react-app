import React from 'react';
import styled from 'styled-components';
import './test.css';

const HamburgerMenu = () => {
	return (
		<nav role='navigation'>
			<div id='menuToggle'>
				<input type='checkbox' />
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default HamburgerMenu;
