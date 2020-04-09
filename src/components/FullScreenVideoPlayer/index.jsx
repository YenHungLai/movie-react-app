import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './style';
import { PATH_YOUTUBE_BASE } from '../../constants';
import { getTrailer } from '../../services';
// Components
import BackButton from '../BackButton';

const FullScreenVideoPlayer = () => {
	const [key, setKey] = useState();
	const { id, type } = useParams();

	// Anyway around this pattern?
	useEffect(() => {
		getTrailer(id, type).then((res) => {
			setKey(res.key);
		});
	}, []);

	return (
		<Container>
			<BackButton />
			{key && <iframe src={`${PATH_YOUTUBE_BASE}${key}?autoplay=1`} allowFullScreen></iframe>}
		</Container>
	);
};

export default FullScreenVideoPlayer;
