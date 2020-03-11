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

const Title = styled.strong`
	position: absolute;
	left: 35px;
	bottom: 15px;
`;

export { CarouselContainer, CarouselItemWrapper, Title };
