import styled from 'styled-components';

const RightDrawerContainer = styled.div`
	border: 1px white solid;
	color: white;
	grid-row: 2 / 3;
	grid-column: 2 / span 1;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h3`
	text-transform: uppercase;
`;

const ContentWrapper = styled.div``;

export { RightDrawerContainer, Title, ContentWrapper, Container };
