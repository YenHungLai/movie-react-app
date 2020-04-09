import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const BackBtn = styled.a`
	position: absolute;
	left: 10px;
	top: 8px;
	color: #999;
	cursor: pointer;
	&:active {
		transform: translateX(-2px);
	}
`;

const BackButton = () => {
	const history = useHistory();

	return (
		<BackBtn onClick={history.goBack}>
			<i className='fas fa-arrow-left fa-lg'></i>
		</BackBtn>
	);
};

export default BackButton;
