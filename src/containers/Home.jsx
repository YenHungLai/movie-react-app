import React from 'react';
import styled from 'styled-components';
// Components
import { BaseContainer } from '../components/shared';
import LeftDrawer from '../components/LeftDrawer';
import ClickableLeftDrawer from '../components/ClickableLeftDrawer';
import RightDrawer from '../components/RightDrawer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

const HomeContainer = styled(BaseContainer)`
	display: grid;
	grid-template-columns: 15% 65% 20%;
	grid-template-rows: 50px 1fr;
`;

const Home = () => {
	return (
		<HomeContainer>
			<Header />
			<LeftDrawer />
			<ClickableLeftDrawer />
			<RightDrawer />
			<MainContent />
		</HomeContainer>
	);
};

export default Home;
