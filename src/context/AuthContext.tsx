/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';
import { LoginArgs } from '../types/user';

const AuthContext = createContext({
  token: '',
  user: null,
  onLogin: (data: LoginArgs) => {},
  onLogout: () => {},
});

export default AuthContext;
