/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { ReduxState } from '../types/common';

export interface AuthState {
  signUpData: ReduxState;
  signInData: ReduxState;
}

const initialState: AuthState = {
  signUpData: {
    loading: false,
    data: null,
    error: null,
  },
  signInData: {
    loading: false,
    data: null,
    error: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpStart: (state) => {
      state.signUpData.loading = true;
    },
    signUpSuccess: (state, { payload }) => {
      state.signUpData.loading = false;
      state.signUpData.data = payload;
      state.signUpData.error = null;
    },
    signUpError: (state, { payload }) => {
      state.signUpData.loading = false;
      state.signUpData.data = null;
      state.signUpData.error = payload;
    },
  },
});

const { reducer, actions } = authSlice;

export const { signUpStart, signUpSuccess, signUpError } = actions;

export default reducer;
