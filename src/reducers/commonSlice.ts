/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  open: boolean,
  title: string
}

export interface NotifyState {
  open: boolean,
  title: string,
  message: string,
}

export interface CommonState {
  modal: ModalState,
  notify: NotifyState,
}

const initialState: CommonState = {
  modal: {
    open: false,
    title: '',
  },
  notify: {
    open: false,
    title: '',
    message: '',
  },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setModal: (state, { payload }) => {
      state.modal = payload;
    },
    setNotify: (state, { payload }) => {
      state.notify = payload;
    },
  },
});

const { reducer, actions } = commonSlice;

export const { setModal, setNotify } = actions;

export default reducer;
