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

export { CarouselContainer, CarouselItemWrapper, Title };
