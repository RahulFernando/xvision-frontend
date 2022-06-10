/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { ThunkAction, AnyAction } from '@reduxjs/toolkit';

// reducers
import { signUpStart, signUpSuccess, signUpError } from '../reducers/authSlice';

// service
import service from '../services/authService';

// types
import { User } from '../types/user';
import { RootState } from '../store/store';

/**
 * handle sign up
 * @param data
 * @returns
 */
export const signUp = (data: User): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(signUpStart());

    try {
      const response = await service.register(data);
      dispatch(signUpSuccess(response.data));
    } catch (error: any) {
      dispatch(signUpError(error.message));
    }
  };
};
