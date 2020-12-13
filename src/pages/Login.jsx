import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from '../config/firebase';
import { Form, Formik } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email().required('Required'),
        password: Yup.string().min(6).required('Required'),
      })}
      onSubmit={(value, formikBag) => {
        if (isLoading) return;
        setIsLoading(true);
        firebase
          .auth()
          .signInWithEmailAndPassword(value.email, value.password)
          .then((res) => {
            setIsLoading(false);
            history.replace('/');
          })
          .catch((error) => {
            setIsLoading(false);
            formikBag.setFieldError('email', error.message);
            formikBag.setFieldError('password', error.message);
          });
      }}>
      <Container>
        <StyledForm noValidate autoComplete='off'>
          <Typography variant='h3' component='h1' gutterBottom>
            Login
          </Typography>
          {/* email */}
          <FormikTextField
            type='email'
            name='email'
            label='Email'
            required
            fullWidth
            autoFocus
          />

          {/* password */}
          <FormikTextField
            type='password'
            name='password'
            label='Password'
            required
            fullWidth
          />

          {/* button */}
          <StyledInput type='submit'>
            {isLoading ? 'Loading' : 'Log In'}
          </StyledInput>
        </StyledForm>
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

export default Login;
