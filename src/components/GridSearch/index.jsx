import React from 'react';
import styled from 'styled-components';
import { HoverInput } from '../shared';

const GridSearchContainer = styled.div`
	margin: 1em;
`;

const GridSearch = ({ setQuery }) => {
	const handleChange = (e) => {
		const input = e.target.value;
		setQuery(input);
	};

	return (
		<GridSearchContainer>
			<HoverInput>
				<input type='search' onChange={handleChange} />
				<i className='fa fa-search'></i>
			</HoverInput>
		</GridSearchContainer>
	);
};

export default GridSearch;
