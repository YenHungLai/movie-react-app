import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container } from './styled';
import { PATH_YOUTUBE_BASE } from '../../constants';
import { getTrailer } from '../../services';

const FullScreenVideoPlayer = () => {
	const [key, setKey] = useState();
	const { id, type } = useParams();
	const { goBack } = useHistory();

	// Anyway around this pattern?
	useEffect(() => {
		getTrailer(id, type).then(res => {
			setKey(res.key);
		});
	}, []);

	return (
		<Container>
			<button onClick={() => goBack()}>
				<i className='far fa-arrow-alt-circle-left fa-2x'></i>
			</button>
			{key && <iframe src={`${PATH_YOUTUBE_BASE}${key}?autoplay=1`} allowFullScreen></iframe>}
		</Container>
	);
};

export default FullScreenVideoPlayer;
