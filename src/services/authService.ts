/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import http from '../helpers/httpHelper';

import { UserLogin, User } from '../types/user';

const authService = {
  login: (data: UserLogin) => http.post('/sign-in', data),
  register: (data: User) => http.post('/sign-up', data),
};

export default authService;
