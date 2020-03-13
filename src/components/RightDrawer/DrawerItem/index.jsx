import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getDetails } from '../../../services';
import { ContentWrapper, ReleaseDate, Title } from './styles';

const DrawerItem = ({ content, homePageContent }) => {
	const [details, setDetails] = useState({});
	const { backdrop_path, title, release_date, name } = content;

	useEffect(() => {
		getDetails(content.id, homePageContent).then(res => setDetails(res));
	}, [content]);
	// console.log(details);

	return (
		<ContentWrapper>
			<img src={backdrop_path} alt={title || name} width='95%' />
			<Title>{title || name}</Title>
			<ReleaseDate>{moment(release_date).format('DD.MM.YY')}</ReleaseDate>
			{homePageContent === 'movies' ? (
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
