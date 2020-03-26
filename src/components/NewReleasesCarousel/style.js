import styled from 'styled-components';

export const CarouselContainer = styled.div`
	margin: auto;
	width: ${props => props.containerWidth};
`;

export const CarouselItemWrapper = styled.div`
	position: relative;
	& img {
		width: 100%;
	}
`;

export const Title = styled.h1`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const ReleaseDate = styled.div`
	position: absolute;
	right: 10px;
	bottom: 8px;
	& > p::first-letter {
		text-transform: capitalize;
	}
	& > small {
		color: #999;
	}
`;

export const WatchTrailer = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	left: 10px;
	bottom: 8px;
	& i {
		margin-right: 0.5em;
		color: #8ec6cc;
	}
	& p {
		text-transform: capitalize;
	}
	& small {
		color: #999;
	}
`;
