import React from 'react';
import { Link } from 'react-router-dom';
import {
	CarouselContainer,
	CarouselItemWrapper,
	Title,
	ReleaseDate,
	WatchTrailer
} from './styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
	infinite: true,
	arrows: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const NewReleasesCarousel = ({ carouselItems, containerWidth }) => {
	console.log(carouselItems);
	return (
		<CarouselContainer containerWidth={containerWidth}>
			<Slider {...settings}>
				{carouselItems.map(item => (
					<CarouselItemWrapper key={item.id}>
						<img
							src={item.backdrop_path}
							alt={item.title}
							width='90%'
						/>
						<Title>{item.title}</Title>
						<WatchTrailer>
							<Link
								to={`/trailer/${item.trailer.id}/${item.trailer.key}/${item.trailer.size}`}
							>
								<i className='far fa-play-circle fa-2x'></i>
							</Link>
							<div>
								<p>watch trailer</p>
								<small>1:30</small>
							</div>
						</WatchTrailer>
						<ReleaseDate>
							<p>release date</p>
							<small>{item.release_date}</small>
						</ReleaseDate>
					</CarouselItemWrapper>
				))}
			</Slider>
		</CarouselContainer>
	);
};

export default NewReleasesCarousel;
