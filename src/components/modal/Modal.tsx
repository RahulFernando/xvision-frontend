/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog, IconButton, DialogTitle, DialogContent, DialogActions, Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Close as CloseIcon } from '@mui/icons-material';
import { AppDispatch, RootState } from '../../store/store';

// reducers
import { setModal, ModalState } from '../../reducers/commonSlice';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.defaultProps = {
  children: null,
};

interface Props {
  buttonLabel?: string;
  content: React.ReactNode;
}

const Modal: FC<Props> = ({ buttonLabel, content }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { open, title } = useSelector<RootState, ModalState>((state) => state.common.modal);

  const closeModalHandler = () => {
    dispatch(setModal({ open: false, title: '' }));
  };

  return (
    <BootstrapDialog open={open} onClose={closeModalHandler}>
      <form>
        <BootstrapDialogTitle onClose={closeModalHandler} id={title}>
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>{content}</DialogContent>
        <DialogActions>
          <Button variant="outlined">Cancel</Button>
          <Button type="submit" variant="contained">
            {buttonLabel}
          </Button>
        </DialogActions>
      </form>
    </BootstrapDialog>

  );
};

Modal.defaultProps = {
  buttonLabel: 'Save',
};

export default Modal;
