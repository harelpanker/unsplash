import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '40px',
    padding: '20px',
  },
}));

const Input = ({ searchTerm }) => {
  const classes = useStyles();

  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm(value);
    setValue('');
  };

  return (
    <Box component='section'>
      <Container>
        <Paper className={classes.root}>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
              label='Search photos'
              fullWidth
              value={value}
              onChange={handleChange}
              autoFocus={true}
              type='text'
            />
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Input;
