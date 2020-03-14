import React, { useState } from 'react';
import { SuggestionsContainer, SearchContainer, MovieSearch } from './style';
import { connect } from 'react-redux';

const Suggestions = ({ contentPool, query }) => {
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
					<li key={item.id}>
						<img src={item.backdrop_path} height='150px' />
					</li>
				))}
			</ul>
		</SuggestionsContainer>
	);
};

const Search = props => {
	const [state, setState] = useState();

	const handleChange = e => {
		// TODO: sanitize input
		setState(e.target.value);
	};

	return (
		<SearchContainer>
			<i className='fas fa-search'></i>
			<MovieSearch onChange={handleChange} type='text' placeholder='Search' />
			<Suggestions {...props} query={state} />
		</SearchContainer>
	);
};

const mapStateToProps = state => ({
	// Have duplicates.
	contentPool: [
		...state.movies.nowPlaying,
		...state.movies.topRated,
		...state.serials.onTheAir,
		...state.serials.topRated
	]
});

export default connect(mapStateToProps)(Search);
