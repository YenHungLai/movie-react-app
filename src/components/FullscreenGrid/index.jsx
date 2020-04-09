import React from 'react';
import { Link } from 'react-router-dom';
// Components
import { GridContainer, MovieWrapper, Title, Info } from './style';

const FullscreenGrid = ({ content, type }) => {
	return (
		<GridContainer>
			{content.map((item) => (
				<MovieWrapper>
					<Link to={`/${type}/${item.id}`}>
						<img src={item.poster_path} width='100%' />
					</Link>
					<Title>{item.title || item.name}</Title>
					<Info>
						<time>
							{item.release_date
								? item.release_date.slice(0, 4)
								: item.first_air_date.slice(0, 4)}
						</time>
					</Info>
				</MovieWrapper>
			))}
		</GridContainer>
	);
};

export default FullscreenGrid;
