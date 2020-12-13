import React from 'react';
import styled from 'styled-components';

const Error = ({ errors }) => {
  return (
    <StyledError>
      This is your error:
      <br />
      {errors}
    </StyledError>
  );
};

const StyledError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  line-height: 170%;
`;
export default Error;
