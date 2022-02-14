import React from 'react';
// mui components
import { TextField } from '@mui/material';
// custom components
import Button from '../Button';

const Upload = () => {
  return (
    <>
      <h2>Upload Product</h2>
      <h4>Name</h4>
      <TextField />
      <h4>Description</h4>
      <TextField />
      <h4>Quantity</h4>
      <TextField />
      <h4>Price per Product</h4>
      <TextField />
      <Button text='Upload image' />
      <Button text='Upload product' />
    </>
  );
};

export default Upload;