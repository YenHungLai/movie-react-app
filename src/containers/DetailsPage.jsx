import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getCredits, getDetails } from '../services';
// Components
import { BaseContainer } from '../components/shared';
import Description from '../components/Description';

const DetailsPageContainer = styled(BaseContainer)`
	background: url(${({ background }) => background}) rgb(138, 140, 146);
	background-size: cover;
	background-blend-mode: multiply;
	height: 97vh;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Poster = styled.img`
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const BackBtn = styled.a`
	position: absolute;
	left: 10px;
	top: 8px;
	color: #999;
	cursor: pointer;
`;

const DetailsPage = () => {
	const [details, setDetails] = useState({});
	const [credits, setCredits] = useState({});
	const { type, id } = useParams();
	const history = useHistory();

	useEffect(() => {
		getCredits(id, type).then((res) => {
			setCredits(res);
			console.log(res);
		});
		getDetails(id, type).then((res) => {
			console.log(res);
			setDetails(res);
		});
	}, []);

	// How to get derived data from state.
	// Crew property for tv shows always empty.
	const director =
		credits.crew && (credits.crew.find((item) => item.job === 'Director') || {}).name;
	const genres = details.genres && details.genres.map((genre) => genre.name);
	const releaseYear = details.release_date && details.release_date.slice(0, 4);
	const actors = credits.cast && credits.cast.map((actor) => actor.name).slice(0, 5);
	const producers =
		credits.crew &&
		credits.crew.filter((crew) => crew.job === 'Producer').map((producer) => producer.name);
	const screenplay =
		credits.crew &&
		credits.crew.filter((crew) => crew.job === 'Screenplay').map((writer) => writer.name);

	return (
		<DetailsPageContainer background={details.backdrop_path}>
			<BackBtn onClick={history.goBack}>
				<i className='far fa-arrow-alt-circle-left fa-3x'></i>
			</BackBtn>
			<Description
				details={details}
				credits={credits}
				director={director}
				genres={genres}
				releaseYear={releaseYear}
				actors={actors}
				producers={producers}
				screenplay={screenplay}
			/>
			<Poster src={details.poster_path} width='25%' />
		</DetailsPageContainer>
	);
};

export default DetailsPage;
