import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styled';
import { PATH_YOUTUBE_BASE } from '../../constants';
// Components
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

const FullScreenVideoPlayer = () => {
	const { id, key, size } = useParams();

	console.log(id, key, size);

	return (
		<Container>
			<Player
				playsInline
				poster='https://image.tmdb.org/t/p/w500/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg'
				src={`https://www.youtube.com/embed/${key}`}
			/>
			<iframe src='https://www.youtube.com/embed/9sWEecNUW-o'></iframe>
		</Container>
	);
};

export default FullScreenVideoPlayer;
