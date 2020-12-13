import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AppContext from '../../store/AppContext';

const GuestRoute = ({ children, ...rest }) => {
  const [isLoggedIn] = useContext(AppContext);

  if (!isLoggedIn) return <Route {...rest}>{children}</Route>;

  return <Redirect to='/' />;
};

export default GuestRoute;
