import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import usePredict from '../utils/Hooks/usePredict';

const Tenserflow = () => {
  const [url, setUrl] = useState('');
  const imageRef = useRef();
  const [predict, predicts, isLoading] = usePredict();

  const handleChange = (e) => setUrl(e.target.value);

  return (
    <Header>
      <Container>
        <Title>Tensorflow</Title>
        <TextField
          label='Paste Image Url'
          fullWidth
          value={url}
          onChange={handleChange}
          autoFocus={true}
          type='text'
        />

        <img
          ref={imageRef}
          src={
            url
              ? url
              : 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          alt={predicts.length > 0 ? predicts[0].className : ''}
          width='500'
          crossOrigin='anonymous'
        />

        <Button onClick={() => predict(imageRef.current)}>
          {isLoading ? 'Loading...' : 'Predict Result'}
        </Button>
        {predicts.length > 0 && (
          <Ul>
            {predicts.map((predict, index) => (
              <li key={index}>
                {predict.className} -{' '}
                <span>{Math.floor(predict.probability * 100)}%</span>
              </li>
            ))}
          </Ul>
        )}
      </Container>
    </Header>
  );
};
const Ul = styled.ul`
  padding-left: 0;
  list-style-type: none;
  text-transform: capitalize;
`;
const Button = styled.button`
  margin-top: 30px;
  padding: 8px 30px;
  color: ghostwhite;
  background-color: #05142b;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s all ease-in-out;
  &:hover {
    background-color: ghostwhite;
    color: #05142b;
    border: 1px solid #05142b;
  }
`;
const Title = styled.h1`
  font-size: 90px;
`;
const Header = styled.header`
  padding: 100px 0;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .MuiFormControl-root {
    max-width: 450px;
    margin: 0 auto 20px auto;
  }
`;

export default Tenserflow;
