import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getCredits } from '../services';
// Components
import { BaseContainer } from '../components/shared';

const DetailsPageContainer = styled(BaseContainer)`
	color: white;
`;

const DetailsPage = () => {
	const { type, id } = useParams();
	useEffect(() => {
		// TODO: get movie info from API in here or from router state.
		getCredits(id, type).then(res => {
			console.log(res);
		});
	}, []);

	return (
		<DetailsPageContainer>
			<p>DETAILS PAGE</p>
		</DetailsPageContainer>
	);
};

export default DetailsPage;
