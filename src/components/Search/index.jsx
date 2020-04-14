import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	SuggestionsContainer,
	SearchContainer,
	MovieSearch,
	MovieCard,
	MovieDetails,
	Section,
} from './style';

const ResultItemWrapper = ({
	type,
	id,
	name,
	title,
	release_date,
	first_air_date,
	poster_path,
}) => (
	<Link to={`/${type}/${id}`} key={id}>
		<MovieCard>
			<img src={poster_path} width='60px' />
			<MovieDetails>
				<p>
					{title || name} ({(release_date || first_air_date).slice(0, 4)})
				</p>
			</MovieDetails>
		</MovieCard>
	</Link>
);

const Suggestions = ({ contentPool, query }) => {
	const movieResults = contentPool.filter(
		(item) => item.title && item.title.toLowerCase().includes(query)
	);
	const seriesResults = contentPool.filter(
		(item) => item.name && item.name.toLowerCase().includes(query)
	);

	if (query)
		return (
			<SuggestionsContainer show={movieResults.length || seriesResults.length}>
				<Section show={movieResults.length}>movies</Section>
				<ul>
					{movieResults.slice(0, 3).map((item) => (
						<ResultItemWrapper type='movies' {...item} />
					))}
				</ul>
				<Section show={seriesResults.length}>series</Section>
				<ul>
					{seriesResults.slice(0, 3).map((item) => (
						<ResultItemWrapper type='series' {...item} />
					))}
				</ul>
			</SuggestionsContainer>
		);
	else return <></>;
};

const Search = ({ contentPool }) => {
	const [input, setInput] = useState();

	const handleChange = (e) => {
		// TODO: sanitize input
		setInput(e.target.value);
	};

	return (
		<SearchContainer>
			<i className='fas fa-search'></i>
			<MovieSearch onChange={handleChange} type='search' placeholder='Search' />
			<Suggestions contentPool={contentPool} query={input} />
		</SearchContainer>
	);
};

export default Search;
