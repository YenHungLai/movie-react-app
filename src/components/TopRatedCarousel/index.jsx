import React from 'react';
import { Link } from 'react-router-dom';
import { CarouselContainer, CarouselItemWrapper, Title, Rating } from './style';
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

const TopRatedCarousel = ({
	carouselItems,
	containerWidth,
	sliderRef,
	type
}) => {
	return (
		<CarouselContainer containerWidth={containerWidth}>
			<Slider ref={sliderRef} {...settings}>
				{carouselItems.map(item => (
					<CarouselItemWrapper key={item.id}>
						<Link to={`/${type}/${item.id}`}>
							<img src={item.backdrop_path} alt={item.title} />
						</Link>
						<Title>{item.title || item.name}</Title>
						<Rating>
							{item.vote_average}
							<i className='far fa-star'></i>
						</Rating>
					</CarouselItemWrapper>
				))}
			</Slider>
		</CarouselContainer>
	);
};

export default TopRatedCarousel;
