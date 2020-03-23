import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SuggestionsContainer, SearchContainer, MovieSearch } from './style';
import { connect } from 'react-redux';

const Suggestions = ({ contentPool, query, type }) => {
	let results;
	if (query !== '')
		results = contentPool.filter(item => {
			if (item.hasOwnProperty('title'))
				return item.title.toLowerCase().includes(query);
			return item.name.toLowerCase().includes(query);
		});
	else results = [];
	// console.log(results);

	return (
		<SuggestionsContainer>
			<ul>
				{results.slice(0, 5).map(item => (
					<li key={item.id}>
						<Link to={`/${type}/${item.id}`}>
							<img src={item.backdrop_path} height='150px' />
						</Link>
					</li>
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
			<MovieSearch
				onChange={handleChange}
				type='text'
				placeholder='Search'
			/>
			<Suggestions
				contentPool={contentPool}
				query={input}
				type={homePageContent}
			/>
		</SearchContainer>
	);
};

const mapStateToProps = state => ({
	homePageContent: state.ui.homePageContent
});

export default connect(mapStateToProps)(Search);
