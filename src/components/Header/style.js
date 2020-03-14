import styled from 'styled-components';

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	color: #999;
	padding: 0 1em;
	transition: padding 0.2s ease-in;
	padding-left: ${({ showLeftDrawer }) => (showLeftDrawer ? '14em' : '1em')};
`;

export { HeaderContainer };
