import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledHome>
      <Header>unSplash App</Header>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled(motion.h1)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 80px;
  letter-spacing: -1px;
  margin-bottom: 50px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
export default Home;
