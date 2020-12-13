import React from 'react';
import uuid from 'react-uuid';
import Gallery from '../../pages/Gallery';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import Tenserflow from '../../pages/Tenserflow';

const routes = [
  {
    id: uuid(),
    path: '/',
    exact: true,
    component: () => <Home />,
    protected: null,
  },
  {
    id: uuid(),
    path: '/gallery',
    component: () => <Gallery />,
    protected: 'auth',
  },
  {
    id: uuid(),
    path: '/login',
    exact: true,
    component: () => <Login />,
    protected: 'guest',
  },
  {
    id: uuid(),
    path: '/sign-up',
    exact: true,
    component: () => <SignUp />,
    protected: 'guest',
  },
  {
    id: uuid(),
    path: '/tenserflow',
    exact: true,
    component: () => <Tenserflow />,
    protected: null,
  },
];

export default routes;
