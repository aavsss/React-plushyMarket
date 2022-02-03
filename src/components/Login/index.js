import React, { useState} from 'react';
import { Link } from 'react-router-dom';
// Google components
import { GoogleLogin } from 'react-google-login';
// Mui components
import { TextField } from '@mui/material';
// Custom components
import { Wrapper } from './Login.styles';
import Button from '../Button';
// hook
import useLogin from './useLogin';

const LogIn = () => {

  const {
    handleEmailChange, 
    handlePasswordChange,
    loginMutation
  } = useLogin();
  
  return (
    <Wrapper>
      <h3>Email</h3>
      <TextField onChange={(event) => handleEmailChange(event.target.value)}/>
      <h3>Password</h3>
      <TextField onChange={(event) => handlePasswordChange(event.target.value)}/>
      <Button text='Login' callback={() => loginMutation.mutate()}/>
      <h5>Don't have an account?</h5>
      <Link to={'/register'}>
        <Button text='Register' />
      </Link>
    </Wrapper>
  )
};

export default LogIn;