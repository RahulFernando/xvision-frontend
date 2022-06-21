/* eslint-disable import/prefer-default-export */
import React from 'react';

// pages
const Auth = React.lazy(() => import('../pages/auth/Auth'));
const Welcome = React.lazy(() => import('../pages/welcome/Welcome'));

export const publicRoutes = [
  {
    key: 'p1',
    path: '/',
    element: <Auth />,
  },
];

export const privateRoutes = [
  {
    key: 'p1',
    path: '/',
    element: <Welcome />,
  },
];
