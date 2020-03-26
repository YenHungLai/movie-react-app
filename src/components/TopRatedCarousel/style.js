import styled from 'styled-components';

const CarouselContainer = styled.div`
	margin: auto;
	width: ${props => props.containerWidth};
`;

const CarouselItemWrapper = styled.div`
	transition: transform 0.5s ease-out;
	position: relative;
	margin: auto;
	& img {
		width: 95%;
		margin: auto;
	}
`;

const Title = styled.strong`
	position: absolute;
	left: 35px;
	bottom: 15px;
`;

const Rating = styled.div`
	position: absolute;
	right: 35px;
	bottom: 15px;
	& > i {
		color: #6decf9;
		margin-left: 5px;
	}
`;

export { CarouselContainer, CarouselItemWrapper, Title, Rating };
