import styled from 'styled-components';

const CarouselContainer = styled.div`
	margin: auto;
	width: ${props => props.containerWidth};
`;

const CarouselItemWrapper = styled.div`
	transition: transform 0.5s ease-out;
	position: relative;
	& > img {
		margin: auto;
	}
`;

const Title = styled.h1`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const ReleaseDate = styled.div`
	position: absolute;
	right: 75px;
	bottom: 20px;
	& > p::first-letter {
		text-transform: capitalize;
	}
	& > small {
		color: #999;
	}
`;

const WatchTrailer = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	left: 75px;
	bottom: 20px;
	& i {
		margin-right: 0.5em;
		color: #6decf9;
	}
	& p {
		text-transform: capitalize;
	}
	& small {
		color: #999;
	}
`;

export {
	CarouselContainer,
	CarouselItemWrapper,
	Title,
	ReleaseDate,
	WatchTrailer
};