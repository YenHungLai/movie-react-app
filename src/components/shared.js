import styled, { keyframes } from 'styled-components';

export const BaseContainer = styled.div`
	background-color: #08090a;
	position: relative;
`;

export const HoverInput = styled.form`
	position: relative;
	transition: all 1s;
	width: 50px;
	height: 50px;
	background: white;
	box-sizing: border-box;
	border-radius: 25px;
	border: 4px solid white;
	padding: 5px;
	& > input {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 42.5px;
		line-height: 30px;
		outline: 0;
		border: 0;
		display: none;
		font-size: 1em;
		border-radius: 20px;
		padding: 0 20px;
	}
	& > .fa {
		box-sizing: border-box;
		padding: 10px;
		width: 42.5px;
		height: 42.5px;
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 50%;
		color: #07051a;
		text-align: center;
		font-size: 1.2em;
		transition: all 1s;
	}
	&:hover {
		width: 200px;
		cursor: pointer;
	}
	&:hover input {
		display: block;
	}
	&:hover .fa {
		background: #07051a;
		color: white;
	}
`;

export const fadeIn = keyframes`
	from { opacity: 0 };
	to { opacity: 1 };
`;
