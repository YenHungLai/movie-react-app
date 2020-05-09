import styled from 'styled-components';

export const HeaderContainer = styled.div`
	grid-column: 2/4;
	display: flex;
	align-items: center;
	color: #999;
	padding: 0 1em;
`;

export const PremiumIcon = styled.div`
	display: flex;
	align-items: center;
	background-color: #3e0f6c;
	color: white;
	padding: 5px 8px;
	font-weight: bold;
	& > i {
		margin-right: 5px;
	}
	& > p {
		text-transform: capitalize;
	}
`;
