import React, { FC } from 'react';
import {
  Grid, Typography, Button,
} from '@mui/material';
import { useMsal } from '@azure/msal-react';

// commponents
import Modal from '../../components/modal/Modal';

const Auth: FC = () => {
  const { instance } = useMsal();

  const buttonClickHandler = () => {
    instance.loginPopup();
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
