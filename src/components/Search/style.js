import styled from 'styled-components';

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
	z-index: 100;
	position: absolute;
	top: 37px;
	background-color: white;
	color: black;
	border-radius: 10px;
	padding: 0 1em;
	& li {
		list-style: none;
	}
`;

export const MovieCard = styled.li`
	display: flex;
	margin: 10px 0;
`;

export const MovieDetails = styled.div`
	display: flex;
	white-space: nowrap;
`;
