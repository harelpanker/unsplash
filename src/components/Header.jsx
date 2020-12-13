import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { motion } from 'framer-motion';

const Header = () => {
  const variants = {
    hidden: { opacity: 0.2, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <StyledHeader>
      <Container>
        <StyledH1
          initial='hidden'
          animate='visible'
          transition={{ ease: 'easeIn', duration: 0.5 }}
          variants={variants}>
          Unsplash
        </StyledH1>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: 100px 0;
`;
const StyledH1 = styled(motion.h1)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 80px;
  letter-spacing: -1px;
  margin-bottom: 50px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
export default Header;
