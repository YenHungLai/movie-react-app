import styled from 'styled-components';

const RightDrawerContainer = styled.div`
	background-color: #13151b;
	color: white;
	grid-row: 2 / 3;
	grid-column: 3 / span 1;
	display: flex;
	flex-direction: column;
	padding: 0 0.5em;
`;

const Title = styled.h3`
	text-transform: uppercase;
	margin: 1em 0;
`;

export { RightDrawerContainer, Title };
