import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	SuggestionsContainer,
	SearchContainer,
	MovieSearch,
	MovieCard,
	MovieDetails
} from './style';
import { connect } from 'react-redux';

const Suggestions = ({ contentPool, query, type }) => {
	let results;
	if (query !== '')
		results = contentPool.filter(item => {
			if (item.hasOwnProperty('title')) return item.title.toLowerCase().includes(query);
			return item.name.toLowerCase().includes(query);
		});
	else results = [];
	// console.log(results);

	return (
		<SuggestionsContainer>
			<ul>
				{results.slice(0, 5).map(item => (
					<Link to={`/${type}/${item.id}`}>
						<MovieCard key={item.id}>
							<img src={item.poster_path} width='60px' />
							<MovieDetails>
								<p>
									{item.name || item.title} ({item.release_date.slice(0, 4)})
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

	const handleChange = e => {
		// TODO: sanitize input
		setInput(e.target.value);
	};

	return (
		<SearchContainer>
			<i className='fas fa-search'></i>
			<MovieSearch onChange={handleChange} type='text' placeholder='Search' />
			<Suggestions contentPool={contentPool} query={input} type={homePageContent} />
		</SearchContainer>
	);
};

const mapStateToProps = state => ({
	homePageContent: state.ui.homePageContent
});

export default connect(mapStateToProps)(Search);
