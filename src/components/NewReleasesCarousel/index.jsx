import React from 'react';
import moment from 'moment';
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

const CarouselItem = ({
	backdrop_path,
	title,
	name,
	type,
	id,
	release_date,
	first_air_date
}) => {
	// Anyway around this pattern?
	const releaseDate = type === 'movies' ? release_date : first_air_date;

	return (
		// Image size changes, content does not stay in image.
		<CarouselItemWrapper>
			<img src={backdrop_path} alt={title} />
			<Title>{title || name}</Title>
			<WatchTrailer>
				<Link to={`/trailer/${type}/${id}`}>
					<i className='far fa-play-circle fa-2x'></i>
				</Link>
				<div>
					<p>watch trailer</p>
					<small>1:30</small>
				</div>
			</WatchTrailer>
			<ReleaseDate>
				<p>release date</p>
				<small>{moment(releaseDate).format('DD.MM.YY')}</small>
			</ReleaseDate>
		</CarouselItemWrapper>
	);
};

const NewReleasesCarousel = ({ carouselItems, containerWidth, type }) => {
	return (
		<CarouselContainer containerWidth={containerWidth}>
			<Slider {...settings}>
				{carouselItems.map(item => (
					<CarouselItem {...item} type={type} key={item.id} />
				))}
			</Slider>
		</CarouselContainer>
	);
};

export default NewReleasesCarousel;
