import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Components
import { BaseContainer } from '../components/shared';

const FullscreenListContainer = styled(BaseContainer)`
	padding: 1em;
	color: white;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	grid-column-gap: 6px;
`;

const MovieWrapper = styled.div``;

const Title = styled.p``;
const Info = styled.div``;

const FullscreenList = ({ test }) => {
	console.log(test);
	return (
		<FullscreenListContainer>
			{test.map(item => (
				<MovieWrapper>
					<img src={item.poster_path} width='100px' />
					<Title>{item.title}</Title>
					<Info>
						<time>{item.release_date}</time>
					</Info>
				</MovieWrapper>
			))}
		</FullscreenListContainer>
	);
};

export default connect(state => ({
	test: state.movies.nowPlaying
}))(FullscreenList);
