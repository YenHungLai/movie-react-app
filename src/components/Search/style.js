import styled from 'styled-components';
import { fadeIn } from '../shared';

export const SearchContainer = styled.div`
	flex: 0.2;
	display: flex;
	position: relative;
	align-items: center;
	& > i {
		margin-right: 0.5em;
	}
`;

export const MovieSearch = styled.input`
	background-color: transparent;
	border: none;
	outline: none;
	color: white;
	padding: 5px 0;
	&:focus {
		border-bottom: 1px white solid;
	}
`;

export const SuggestionsContainer = styled.div`
	display: ${({ show }) => (show ? 'block' : 'none')};
	z-index: 100;
	position: absolute;
	top: 37px;
	background-color: white;
	color: black;
	border-radius: 10px;
	padding: 0.5em 1em;
	& li {
		list-style: none;
	}
	animation: ${fadeIn} 0.3s ease-in;
`;

export const MovieCard = styled.li`
	display: flex;
	align-items: center;
	margin: 10px 0;
	&:hover {
		background-color: #99999924;
	}
`;

export const MovieDetails = styled.div`
	display: flex;
	margin-left: 1em;
	max-width: 285px;
	& > p {
		font-weight: bold;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

export const Section = styled.h3`
	text-transform: uppercase;
	display: ${({ show }) => (show ? 'block' : 'none')};
	&:before {
		position: absolute;
		content: '';
		height: 1.1em;
		border-left: 3px solid #fa320a;
		margin: 5px 0 0 -7px;
	}
`;
