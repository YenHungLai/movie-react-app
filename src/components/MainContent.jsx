import React from 'react';
import styled, { keyframes } from 'styled-components';
// Components
import Carousel from './Carousel';

const MainContentContainer = styled.div`
	border: 1px white solid;
	background-color: #353e47;
	color: white;
	grid-column: 2 / 3;
	grid-row: 2 / 3;
`;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const Title = styled.h1`
	margin: 0;
	color: white;
	text-transform: capitalize;
	// Testing
	animation: ${fadeIn} 2s ease-in;
`;

const SubTitle = styled.h2`
	margin: 0;
	color: white;
	text-transform: capitalize;
`;

const newReleasesSettings = {
	infinite: true,
	arrows: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const topRatedSettings = {
	infinite: true,
	arrows: false,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1
};

const MainContent = ({ nowPlaying, topRated }) => {
	return (
		<MainContentContainer>
			<Title>new releases</Title>
			<Carousel
				carouselItems={nowPlaying}
				imgHeight='400px'
				containerWidth='auto'
				settings={newReleasesSettings}
			/>
			<SubTitle>top rated</SubTitle>
			<Carousel
				carouselItems={topRated}
				settings={topRatedSettings}
				imgHeight='200px'
				containerWidth='75%'
			/>
		</MainContentContainer>
	);
};

export default MainContent;
