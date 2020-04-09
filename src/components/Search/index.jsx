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
import { connect } from 'react-redux';

const Suggestions = ({ contentPool, query }) => {
	const movieResults = contentPool.filter(
		(item) => item.title && item.title.toLowerCase().includes(query)
	);
	const seriesResults = contentPool.filter(
		(item) => item.name && item.name.toLowerCase().includes(query)
	);

	return (
		<SuggestionsContainer show={movieResults.length || seriesResults.length}>
			<Section show={movieResults.length}>movies</Section>
			<ul>
				{movieResults.slice(0, 3).map((item) => (
					<Link to={`/movies/${item.id}`} key={item.id}>
						<MovieCard>
							<img src={item.poster_path} width='60px' />
							<MovieDetails>
								<p>
									{item.title} ({item.release_date.slice(0, 4)})
								</p>
							</MovieDetails>
						</MovieCard>
					</Link>
				))}
			</ul>
			<Section show={seriesResults.length}>series</Section>
			<ul>
				{seriesResults.slice(0, 3).map((item) => (
					<Link to={`/series/${item.id}`} key={item.id}>
						<MovieCard>
							<img src={item.poster_path} width='60px' />
							<MovieDetails>
								<p>
									{item.name} ({item.first_air_date.slice(0, 4)})
								</p>
							</MovieDetails>
						</MovieCard>
					</Link>
				))}
			</ul>
		</SuggestionsContainer>
	);
};

const Search = ({ contentPool, homePageContent }) => {
	const [input, setInput] = useState();

	const handleChange = (e) => {
		// TODO: sanitize input
		setInput(e.target.value);
	};

	return (
		<SearchContainer>
			<i className='fas fa-search'></i>
			<MovieSearch onChange={handleChange} type='search' placeholder='Search' />
			{input && <Suggestions contentPool={contentPool} query={input} />}
		</SearchContainer>
	);
};

const mapStateToProps = (state) => ({
	homePageContent: state.ui.homePageContent,
});

export default connect(mapStateToProps)(Search);
