import styled from 'styled-components';

const MainContentContainer = styled.div`
	position: relative;
	padding: 1em 0.7em;
	background-color: #13151b;
	color: white;
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	transition: padding 0.2s ease-in;
`;

const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0.5em 0;
`;

const Title = styled.h1`
	text-transform: capitalize;
`;

const SubTitle = styled.h2`
	text-transform: capitalize;
`;

const ControlWrapper = styled.div`
	display: flex;
	& > button:first-child:active {
		transform: translateX(-1px);
	}
	& > button:last-child:active {
		transform: translateX(1px);
	}
	& i {
		color: white;
		pointer-events: none;
	}
	& > span {
		border-left: #999 1px solid;
		margin: 0 7px;
	}
`;

export const VerticalLine = styled.div`
	position: absolute;
	right: 0;
	top: 5%;
	height: 90%;
	border-right: white 1px solid;
`;

export const HorizontalLine = styled.div`
	flex: 0.95;
	border-bottom: #999 1px solid;
`;

export { MainContentContainer, FlexContainer, Title, SubTitle, ControlWrapper };
