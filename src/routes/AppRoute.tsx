import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

// components
import Loading from '../components/loading/Loading';

// routes
import { publicRoutes, privateRoutes } from './routes';

const AppRoute: FC = () => (
  <Suspense fallback={<Loading />}>
    <UnauthenticatedTemplate>
      <Routes>
        {publicRoutes.map(({ path, element, key }) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
    </UnauthenticatedTemplate>
    <AuthenticatedTemplate>
      <Routes>
        {privateRoutes.map(({ path, element, key }) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
    </AuthenticatedTemplate>
  </Suspense>
);

export default AppRoute;
