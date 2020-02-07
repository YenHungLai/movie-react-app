import React from 'react';
import styled from 'styled-components';

const RightDrawerContainer = styled.div`
	border: 1px white solid;
	color: white;
	grid-row: 1 / 3;
	grid-column: 3 / span 1;
`;

const RightDrawer = () => {
	return <RightDrawerContainer>RIGHT DRAWER</RightDrawerContainer>;
};

export default RightDrawer;
