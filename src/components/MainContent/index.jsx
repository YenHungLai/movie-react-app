import React, { useRef } from 'react';
import { connect } from 'react-redux';
// Components
import NewReleasesCarousel from '../NewReleasesCarousel';
import TopRatedCarousel from '../TopRatedCarousel';
import {
	MainContentContainer,
	FlexContainer,
	Title,
	SubTitle,
	ControlWrapper
} from './styled';

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

	const newReleases =
		homePageContent === 'movies' ? nowPlayingMovies : onTheAirSerials;
	const topRated =
		homePageContent === 'movies' ? topRatedMovies : topRatedSerials;

	return (
		<MainContentContainer showLeftDrawer={showLeftDrawer}>
			<FlexContainer>
				<Title>new releases</Title>
			</FlexContainer>
			<NewReleasesCarousel
				carouselItems={newReleases}
				containerWidth='100%'
				type={homePageContent}
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
			<TopRatedCarousel
				carouselItems={topRated}
				containerWidth='100%'
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
