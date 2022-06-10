/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, FC } from 'react';

// context
import AuthContext from './AuthContext';

// types
import { LoginArgs } from '../types/user';

interface Props {
  children: React.ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);

  /**
   * Handle user login
   * @param data
   */
  const loginHandler = (data: LoginArgs) => {
    setToken(data.token);
    localStorage.setItem('token', data.token);
  };

  /**
   * Handle user logout
   */
  const logoutHandler = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  const context = {
    token,
    user,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
