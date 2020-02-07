import React from 'react';
import styled from 'styled-components';

const LeftDrawerContainer = styled.div`
	border: 1px white solid;
	color: white;
	grid-row: 1 / 3;
	grid-column: 1 / span 1;
`;

const LeftDrawer = () => {
	return <LeftDrawerContainer>LEFT DRAWER</LeftDrawerContainer>;
};

export default LeftDrawer;
