import React, { useState} from 'react';
// Google components
import { GoogleLogin } from 'react-google-login';
// Mui components
import { TextField } from '@mui/material';
// Custom components
import { Wrapper } from './Login.styles';
import Button from '../Button';
// hook
import useLogin from './useLogin';

const clientId = '131005392241-r1qasqkreekddjnelv37f2srssmce8p9.apps.googleusercontent.com';

const LogIn = () => {

  const {
    email, 
    password, 
    handleEmailChange, 
    handlePasswordChange
  } = useLogin();
  
  return (
    <Wrapper>
      <h3>Email</h3>
      <TextField onChange={(event) => handleEmailChange(event.target.value)}/>
      <h3> Password </h3>
      <TextField onChange={(event) => handlePasswordChange(event.target.value)}/>
      <Button text='Login' callback={() => console.log(email)} />
    </Wrapper>
  )
};

export default LogIn;