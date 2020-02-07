import styled from 'styled-components';

const BaseContainer = styled.div`
	background-color: #08090a;
	height: 98vh;
	width: 95vw;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	display: grid;
	grid-template-columns: 15% 70% 15%;
	grid-template-rows: 8% 92%;
	overflow: hidden;
`;

export default BaseContainer;
