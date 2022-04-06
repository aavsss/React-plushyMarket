import React from 'react';
import { Link } from 'react-router-dom';
// Mui components
import { TextField } from '@mui/material';
// Custom components
import { LoginForm, Wrapper, Image } from './Login.styles';
import Button from '../Button';
import Register from '../Register';
// Images
import HeroImage from './../../images/bear.jpg';
// hook
import useLogin from './useLogin';

const LogIn = () => {

  const {
    handleEmailChange: setEmail,
    handlePasswordChange: setPassword,
    handleLogin,
    handleKeyPress,
    openRegister,
    setOpenRegister
  } = useLogin();

  return (
    <Wrapper>
      <Image src={HeroImage} alt="Bear" />
      <LoginForm>
        <h3>Email</h3>
        <TextField onChange={(event) => setEmail(event.target.value)} />
        <h3>Password</h3>
        <TextField type="password" onChange={(event) => setPassword(event.target.value)} />
        <Button text='Login' callback={handleLogin} handleKeyPress={handleKeyPress} />
        <h5>Don't have an account?</h5>
        <Button text='Register' callback={() => setOpenRegister(true)} />
        <Register open={openRegister} handleClose={() => setOpenRegister(false)} />
      </LoginForm>
    </Wrapper>
  )
};

export default LogIn;