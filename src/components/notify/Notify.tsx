import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button,
} from '@mui/material';
import { AppDispatch, RootState } from '../../store/store';

// reducers
import { setNotify, NotifyState } from '../../reducers/commonSlice';

const Notify = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { open, title, message } = useSelector<RootState, NotifyState>(
    (state) => state.common.notify,
  );

  const closeNotifyHandler = () => {
    dispatch(setNotify({ open: false, title: '', message: '' }));
  };

  return (
    <Dialog open={open} onClose={closeNotifyHandler}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={closeNotifyHandler}>Continue</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Notify;
