import React, { useRef } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
// Components
import Carousel from './Carousel';

const MainContentContainer = styled.div`
	padding: 1em 0.5em;
	background-color: #353e47;
	color: white;
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	transition: padding 0.2s ease-in;
	padding-left: ${({ showLeftDrawer }) => (showLeftDrawer ? '16em' : '0.5em')};
`;

const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
	text-transform: capitalize;
	margin-bottom: 0.5em;
`;

const SubTitle = styled.h2`
	text-transform: capitalize;
	margin-bottom: 0.5em;
`;

const ControlWrapper = styled.div`
	display: flex;
	& > button:first-child:active {
		transform: translateX(-1px);
	}
	& > button:last-child:active {
		transform: translateX(1px);
	}
	& i {
		color: white;
		pointer-events: none;
	}
	& > span {
		border-left: #999 1px solid;
		margin: 0 7px;
	}
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

const MainContent = ({
	nowPlayingMovies,
	topRatedMovies,
	onTheAirSerials,
	topRatedSerials,
	homePageContent,
	showLeftDrawer
}) => {
	const sliderRef = useRef();

	const handleClick = e => {
		if (e.target.id === 'next') sliderRef.current.slickNext();
		else sliderRef.current.slickPrev();
	};

	const newReleases = homePageContent === 'movies' ? nowPlayingMovies : onTheAirSerials;
	const topRated = homePageContent === 'movies' ? topRatedMovies : topRatedSerials;

	return (
		<MainContentContainer showLeftDrawer={showLeftDrawer}>
			<FlexContainer>
				<Title>new releases</Title>
			</FlexContainer>
			<Carousel
				carouselItems={newReleases}
				containerWidth='100%'
				settings={newReleasesSettings}
				sliderRef={sliderRef}
			/>
			<FlexContainer>
				<SubTitle>top rated</SubTitle>
				<ControlWrapper>
					<button id='prev' onClick={handleClick}>
						<i className='fas fa-angle-left fa-2x'></i>
					</button>
					<span></span>
					<button id='next' onClick={handleClick}>
						<i className='fas fa-angle-right fa-2x'></i>
					</button>
				</ControlWrapper>
			</FlexContainer>
			<Carousel
				carouselItems={topRated}
				containerWidth='100%'
				settings={topRatedSettings}
				sliderRef={sliderRef}
			/>
		</MainContentContainer>
	);
};

const mapStateToProps = state => ({
	nowPlayingMovies: state.movies.nowPlaying,
	topRatedMovies: state.movies.topRated,
	onTheAirSerials: state.serials.onTheAir,
	topRatedSerials: state.serials.topRated,
	homePageContent: state.ui.homePageContent,
	showLeftDrawer: state.ui.showLeftDrawer
});

export default connect(mapStateToProps)(MainContent);
