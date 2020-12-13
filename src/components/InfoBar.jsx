import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const InfoBar = ({ images, addPageNumber }) => {
  return (
    <Bar>
      <Typography variant='body2' gutterBottom>
        Number of images: {images.length}
      </Typography>
      <Button color='primary' variant='outlined' onClick={addPageNumber}>
        10 more
      </Button>
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default InfoBar;
