import { combineReducers } from '@reduxjs/toolkit';

// slices
import commonSlice from './commonSlice';
import authSlice from './authSlice';

const rootReducer = combineReducers({ common: commonSlice, auth: authSlice });

export default rootReducer;
