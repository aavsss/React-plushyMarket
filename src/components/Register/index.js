import React, { useState } from "react";
import { 
  Dialog,
  DialogTitle, 
  DialogActions, 
  DialogContent, 
  DialogContentText,
  TextField,
  Button
} from '@mui/material';
// Hooks
import useRegister from "./useRegister";

const Register = ({ open, handleClose }) => {

  const {
    handleEmailChange: setEmail,
    handlePasswordChange: setPassword, 
    handleFirstName: setFirstName,
    handleLastName: setLastName,
    registerMutation,
    registerAsSellerMutation
  } = useRegister();

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Join us</DialogTitle>
        <DialogContent>
          <DialogContentText>
            First Name
          </DialogContentText>
          <TextField
            autoFocus
            variant="standard"
            fullWidth
            onChange={(event) => setFirstName(event.target.value)}
          />
          <DialogContentText>
            Last Name
          </DialogContentText>
          <TextField
            autoFocus
            variant="standard"
            fullWidth
            onChange={(event) => setLastName(event.target.value)}
          />
          <DialogContentText>
            Email
          </DialogContentText>
          <TextField
            autoFocus
            type="email"
            variant="standard"
            fullWidth
            onChange={(event) => setEmail(event.target.value)}
          />
          <DialogContentText>
            Password
          </DialogContentText>
          <TextField
            autoFocus
            type="password"
            variant="standard"
            fullWidth
            onChange={(event) => setPassword(event.target.value)}
          />
          <DialogActions>
            <Button onClick={() => registerAsSellerMutation.mutate()}>Register as Seller</Button>
            <Button onClick={() => registerMutation.mutate()}> Register </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Register;