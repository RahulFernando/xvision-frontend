/* eslint-disable max-len */
import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Loading from '../components/loading/Loading';

// routes
import { publicRoutes } from './routes';

const USER = {
  token: null,
  user: 'user',
};

const AppRoute: FC = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      {!USER.token && publicRoutes.map(({ path, element, key }) => <Route key={key} path={path} element={element} />)}
    </Routes>
  </Suspense>
);

export default AppRoute;
