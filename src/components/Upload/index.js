import React from 'react';
// mui components
import { TextField } from '@mui/material';
// custom components
import Button from '../Button';
// hook
import useUpload from './useUpload';

const Upload = () => {
  const { 
    handleName: setName,
    handlePrice: setPrice,
    handleQuantity: setQuantity,
    handleDescription: setDescription,
    uploadMutation
  } = useUpload();

  return (
    <>
      <h2>Upload Product</h2>
      <h4>Name</h4>
      <TextField onChange={(event) => setName(event.target.value)}/>
      <h4>Price per Product</h4>
      <TextField onChange={(event) => setPrice(event.target.value)} />
      <h4>Quantity</h4>
      <TextField onChange={(event) => setQuantity(event.target.value)}/>
      <h4>Description</h4>
      <TextField onChange={(event) => setDescription(event.target.value)}/>
      <Button text='Upload image' />
      <Button text='Upload product' callback={() => uploadMutation.mutate()} />
    </>
  );
};

export default Upload;