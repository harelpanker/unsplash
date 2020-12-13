import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Form, Formik } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import { useHistory } from 'react-router-dom';
import firebase from '../config/firebase';
import * as Yup from 'yup';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(value, formikBag) => {
        if (isLoading) return;
        setIsLoading(true);
        firebase
          .auth()
          .createUserWithEmailAndPassword(value.email, value.password)
          .then((user) => {
            setIsLoading(false);
            history.replace('/');
          })
          .catch((error) => {
            setIsLoading(false);
            formikBag.setFieldError('email', error.message);
          });
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required('Required'),
        password: Yup.string().min(6).required('Required'),
      })}>
      <Container>
        <StyledForm noValidate autoComplete='off'>
          <Typography variant='h3' component='h1' gutterBottom>
            Sign Up
          </Typography>
          {/* email */}
          <FormikTextField
            type='email'
            name='email'
            label='Email'
            fullWidth
            required
            autoFocus
          />

          {/* password */}
          <FormikTextField
            type='password'
            name='password'
            required
            label='Password'
            fullWidth
          />

          {/* button */}
          <StyledInput type='submit'>
            {isLoading ? 'Loading' : 'Sign Up'}
          </StyledInput>
        </StyledForm>
        <Typography variant='p' component='p' gutterBottom gutterTop>
          harelpanker@gmail.com - 123456
        </Typography>
      </Container>
    </Formik>
  );
};

const StyledInput = styled.button`
  padding: 9px 25px;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: translateY(-3px);
    color: ghostwhite;
    background-color: black;
  }
`;
const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`;
const StyledForm = styled(Form)`
  width: 100%;
  margin: 20px;
  border-radius: 7px;
  background-color: ghostwhite;
  padding: 40px 20px;
  max-width: 550px;
  .MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth {
    margin: 10px 0 20px 0;
  }
`;
export default SignIn;
