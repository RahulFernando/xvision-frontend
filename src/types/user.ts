export interface User {
  username: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  passwod: string;
}

export interface LoginArgs {
  token: string;
}
