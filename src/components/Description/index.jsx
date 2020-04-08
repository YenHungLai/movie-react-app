import React from 'react';
import { currencyFormatter } from '../../helps'
// Components
import {
	DescriptionContainer,
	Title,
	SubHeader,
	Summary,
	ListContainer,
	ListsContainer,
} from './styles';

const List = ({ name, values }) => {
	return (
		<ListContainer>
			<strong>{name}</strong>
			{Array.isArray(values) ? (
				<ul>
					{values.map((value) => (
						<li key={value}>{value}</li>
					))}
				</ul>
			) : (
					<p>{values}</p>
				)}
		</ListContainer>
	);
};

const Description = ({
	details: { title, name, runtime, overview, revenue },
	director,
	genres,
	releaseYear,
	actors,
	producers,
	screenplay,
}) => {
	return (
		<DescriptionContainer>
			<Title>
				<h1>{title || name}</h1>
				<h3>{director}</h3>
			</Title>
			<SubHeader>plot summary</SubHeader>
			<Summary>{overview}</Summary>
			<SubHeader>information</SubHeader>
			<ListsContainer>
				<List name='genre' values={genres} />
				<List name='duration' values={`${runtime} minutes`} />
				<List name='release year' values={releaseYear} />
				<List name='revenue' values={currencyFormatter.format(revenue)} />
				{/* <List name='rating' values={releaseYear} /> */}
			</ListsContainer>
			<SubHeader>cast & crew</SubHeader>
			<ListsContainer>
				<List name='actors' values={actors} />
				<List name='producers' values={producers} />
				<List name='screenplay' values={screenplay} />
				<List name='director' values={director} />
			</ListsContainer>
		</DescriptionContainer>
	);
};

export default Description;
