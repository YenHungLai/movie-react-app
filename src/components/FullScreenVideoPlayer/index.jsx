import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container } from './styled';
import { PATH_YOUTUBE_BASE } from '../../constants';

const FullScreenVideoPlayer = () => {
	const { id, key, size } = useParams();
	const { goBack } = useHistory();

	console.log(id, key, size);

	return (
		<Container>
			<button onClick={() => goBack()}>
				<i className='far fa-arrow-alt-circle-left fa-2x'></i>
			</button>
			<iframe
				src={`${PATH_YOUTUBE_BASE}${key}?autoplay=1`}
				allowFullScreen
			></iframe>
		</Container>
	);
};

export default FullScreenVideoPlayer;
