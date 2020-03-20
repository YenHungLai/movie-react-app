import styled from 'styled-components';

export const CarouselContainer = styled.div`
	margin: auto;
	width: ${props => props.containerWidth};
`;

export const CarouselItemContainer = styled.div`
	transition: transform 0.5s ease-out;
	& img {
		margin: auto;
		width: 100%;
	}
`;

export const CarouselItemWrapper = styled.div`
	width: 65%;
	position: relative;
	margin: auto;
`;

export const Title = styled.h1`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const ReleaseDate = styled.div`
	position: absolute;
	right: 30px;
	bottom: 20px;
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
	left: 30px;
	bottom: 20px;
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
