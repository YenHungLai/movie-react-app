import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
	/* & > img:hover {
		transform: scale(1.1);
	} */
`;

const Title = styled.h1`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const ContentCarousel = ({
	carouselItems,
	settings,
	imgHeight,
	containerWidth
}) => {
	return (
		<CarouselContainer containerWidth={containerWidth}>
			<Slider {...settings}>
				{carouselItems.map(item => (
					<CarouselItemWrapper key={item.id}>
						<img
							src={item.backdrop_path}
							alt={item.title}
							height={imgHeight}
						/>
						<Title>{item.title}</Title>
					</CarouselItemWrapper>
				))}
			</Slider>
		</CarouselContainer>
	);
};

export default ContentCarousel;
