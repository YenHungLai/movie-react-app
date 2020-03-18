import styled from 'styled-components';

const MainContentContainer = styled.div`
	position: relative;
	padding: 1em 0.7em;
	background-color: #13151b;
	color: white;
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	transition: padding 0.2s ease-in;
	padding-left: ${({ showLeftDrawer }) => (showLeftDrawer ? '17em' : '1em')};
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

export { MainContentContainer, FlexContainer, Title, SubTitle, ControlWrapper };
