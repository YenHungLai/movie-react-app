import styled from 'styled-components';

export const DescriptionContainer = styled.div`
	width: 65%;
	margin-right: 1em;
`;

export const Title = styled.div``;

export const SubHeader = styled.h2`
	text-transform: capitalize;
	margin: 1em 0;
`;

export const Summary = styled.p``;

export const ListsContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

export const ListContainer = styled.div`
	display: flex;
	margin-right: 2em;
	& > strong {
		margin-right: 1em;
		text-transform: capitalize;
	}
	& li {
		list-style: none;
	}
`;
