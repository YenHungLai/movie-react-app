import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	height: calc(100vh);
	& i {
		color: #6decf9;
	}
	& > button {
		position: fixed;
		left: 10px;
		top: 5px;
	}
	& > iframe {
		margin-top: 2em;
		width: 50%;
		height: 60%;
		border: none;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	}
`;

export { Container };
