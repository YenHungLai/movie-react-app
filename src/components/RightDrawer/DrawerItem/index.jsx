import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getDetails } from '../../../services';
import { ContentWrapper, ReleaseDate, Title } from './style';

const DrawerItem = ({ content, type }) => {
	const [details, setDetails] = useState({});
	const { backdrop_path, title, release_date, name } = content;

	useEffect(() => {
		getDetails(content.id, type).then(res => setDetails(res));
	}, [content]);
	// console.log(details);

	return (
		<ContentWrapper>
			<Link to={`/${type}/${content.id}`}>
				<img src={backdrop_path} alt={title || name} />
			</Link>
			<Title>{title || name}</Title>
			<ReleaseDate>{moment(release_date).format('DD.MM.YY')}</ReleaseDate>
			{type === 'movies' ? (
				<p>{details.runtime} minutes</p>
			) : (
				<p>
					{details.number_of_seasons} seasons -{' '}
					{details.number_of_episodes} episodes
				</p>
			)}
		</ContentWrapper>
	);
};

export default DrawerItem;
