import styled from 'styled-components';

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
	grid-gap: 10px 5px;
	width: 100%;
`;

export const MovieWrapper = styled.div`
	transition: transform 0.2s ease-in;
	&:hover {
		transform: scale(1.05);
	}
`;

export const Title = styled.h4``;

export const Info = styled.small`
	display: block;
	color: #999;
`;
