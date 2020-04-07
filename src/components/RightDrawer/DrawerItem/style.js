import styled from 'styled-components';

const ContentWrapper = styled.div`
	position: relative;
	& img {
		display: block;
		margin: 0.5em auto;
		width: 90%;
	}
	& > p {
		color: #999;
	}
	& > p:last-child {
		font-size: 0.8rem;
	}
`;

const Title = styled.h4`
	display: inline-block;
	max-width: 195px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const ReleaseDate = styled.time`
	display: inline-block;
	position: absolute;
	right: 10px;
	bottom: 20px;
`;

export { ContentWrapper, ReleaseDate, Title };
