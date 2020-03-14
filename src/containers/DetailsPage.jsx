import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getCredits, getDetails } from '../services';
// Components
import { BaseContainer } from '../components/shared';

const DetailsPageContainer = styled(BaseContainer)`
	background: url(${({ background }) => background}) rgb(138, 140, 146);
	background-size: cover;
	background-blend-mode: multiply;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Description = styled.div`
	width: 65%;
	margin-right: 1em;
`;

const Poster = styled.img`
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Title = styled.div``;

const SubHeader = styled.h2`
	text-transform: capitalize;
	margin: 1em 0;
`;

const Summary = styled.p``;

const ListsContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

const ListContainer = styled.div`
	display: flex;
	margin-right: 2em;
	& > strong {
		margin-right: 1em;
		text-transform: capitalize;
	}
	& li {
		list-style: none;
	}
`;

const List = ({ name, values }) => {
	return (
		<ListContainer>
			<strong>{name}</strong>
			{Array.isArray(values) ? (
				<ul>
					{values.map(value => (
						<li key={value}>{value}</li>
					))}
				</ul>
			) : (
				<p>{values}</p>
			)}
		</ListContainer>
	);
};

const DetailsPage = () => {
	const [details, setDetails] = useState({});
	const [credits, setCredits] = useState({});
	const { type, id } = useParams();
	useEffect(() => {
		getCredits(id, type).then(res => {
			setCredits(res);
			console.log(res);
		});
		getDetails(id, type).then(res => {
			console.log(res);
			setDetails(res);
		});
	}, []);

	const director = credits.crew && credits.crew.find(item => item.job === 'Director').name;
	const genres = details.genres && details.genres.map(genre => genre.name);
	const releaseYear = details.release_date && details.release_date.slice(0, 4);
	const actors = credits.cast && credits.cast.map(actor => actor.name).slice(0, 5);
	const producers =
		credits.crew &&
		credits.crew.filter(crew => crew.job === 'Producer').map(producer => producer.name);
	const screenplay =
		credits.crew &&
		credits.crew.filter(crew => crew.job === 'Screenplay').map(writer => writer.name);

	return (
		<DetailsPageContainer background={details.backdrop_path}>
			<Description>
				<Title>
					<h1>{details.title}</h1>
					<h3>{director}</h3>
				</Title>
				<SubHeader>plot summary</SubHeader>
				<Summary>{details.overview}</Summary>
				<SubHeader>information</SubHeader>
				<ListsContainer>
					<List name='genre' values={genres} />
					<List name='duration' values={details.runtime} />
					<List name='release year' values={releaseYear} />
					{/* <List name='rating' values={releaseYear} /> */}
				</ListsContainer>
				<SubHeader>cast & crew</SubHeader>
				<ListsContainer>
					<List name='actors' values={actors} />
					<List name='producers' values={producers} />
					<List name='screenplay' values={screenplay} />
					<List name='director' values={director} />
				</ListsContainer>
			</Description>
			<Poster src={details.poster_path} width='25%' />
		</DetailsPageContainer>
	);
};

export default DetailsPage;
