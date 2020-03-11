import React from 'react';
import { CarouselContainer, CarouselItemWrapper, Title } from './styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
	infinite: true,
	arrows: false,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1
};

const TopRatedCarousel = ({ carouselItems, containerWidth, sliderRef }) => {
	return (
		<CarouselContainer containerWidth={containerWidth}>
			<Slider ref={sliderRef} {...settings}>
				{carouselItems.map(item => (
					<CarouselItemWrapper key={item.id}>
						<img
							src={item.backdrop_path}
							alt={item.title}
							width='90%'
						/>
						<Title>{item.title}</Title>
					</CarouselItemWrapper>
				))}
			</Slider>
		</CarouselContainer>
	);
};

export default TopRatedCarousel;
