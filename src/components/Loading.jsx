import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  return (
    <Backdrop open={true} style={{ zIndex: 100 }}>
      <CircularProgress style={{ color: 'white' }} />
    </Backdrop>
  );
};

export default Loading;
