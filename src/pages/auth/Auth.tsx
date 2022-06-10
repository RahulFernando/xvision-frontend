import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  Grid, Typography, Button,
} from '@mui/material';
import { AppDispatch } from '../../store/store';

// commponents
import Modal from '../../components/modal/Modal';

// reducers
import { setModal } from '../../reducers/commonSlice';

const Auth: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const buttonClickHandler = () => {
    dispatch(setModal({ open: true, title: 'Login' }));
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button onClick={buttonClickHandler}>Open Modal</Button>
        </Grid>
      </Grid>
      <Modal content={<Typography>Authenticate</Typography>} />
    </>
  );
};

export default Auth;
