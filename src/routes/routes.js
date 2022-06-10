/* eslint-disable import/prefer-default-export */
import React from 'react';

// pages
const Auth = React.lazy(() => import('../pages/auth/Auth'));

export const publicRoutes = [
  {
    key: 'p1',
    path: '/',
    element: <Auth />,
  },
];
