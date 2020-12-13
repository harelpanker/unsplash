import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import usePredict from '../utils/Hooks/usePredict';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Image = ({ index, imageSize, removeImage, alt, show }) => {
  const [predict, predicts, isLoading] = usePredict();
  const [open, setOpen] = useState(false);

  const imageRef = useRef();
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenPredict = () => {
    predict(imageRef.current);
    handleClickOpen();
  };

  return (
    <StyledListItem>
      {/* image */}
      <StyledImage
        src={imageSize}
        alt={alt}
        onClick={show}
        id={index}
        ref={imageRef}
        crossOrigin='anonymous'
      />

      <StyledBottomDiv>
        <StyledIconButton onClick={() => handleOpenPredict()}>
          <HelpRoundedIcon fontSize='small' />
        </StyledIconButton>
        <StyledIconButton onClick={() => removeImage(index)}>
          <DeleteRoundedIcon fontSize='small' />
        </StyledIconButton>
      </StyledBottomDiv>

      {/* module */}
      <StyledDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}>
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          Image Prediction
        </DialogTitle>
        <StyledDialogContent dividers>
          {isLoading ? (
            <h5>Fetching Result...</h5>
          ) : (
            <ul>
              {predicts.map((predict, index) => (
                <li key={index}>
                  {predict.className} -{' '}
                  <span>{Math.floor(predict.probability * 100)}%</span>
                </li>
              ))}
            </ul>
          )}
        </StyledDialogContent>
      </StyledDialog>
    </StyledListItem>
  );
};
const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    min-width: 350px;
    max-width: 95%;
  }
`;
const StyledDialogContent = styled(DialogContent)`
  ul {
    padding: 0;
    list-style-type: none;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  max-height: 250px;
  cursor: pointer;
`;
const StyledListItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const StyledBottomDiv = styled.div`
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-image: linear-gradient(transparent, black);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledIconButton = styled(IconButton)`
  color: white !important;
`;

export default Image;
