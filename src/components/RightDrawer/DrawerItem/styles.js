import styled from 'styled-components';

const ContentWrapper = styled.div`
	position: relative;
	& > img {
		display: block;
		margin: 0.5em auto;
		height: 17vh;
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
`;

const ReleaseDate = styled.time`
	display: inline-block;
	position: absolute;
	right: 10px;
`;

export { ContentWrapper, ReleaseDate, Title };
