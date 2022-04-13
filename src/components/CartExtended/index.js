import React, { useState, useEffect } from 'react';
// Components
import CartHolder from '../CartHolder';
// Hooks
import useGetItemsInCart from '../../hooks/useGetItemsInPlushy';
import useCartExtended from './useCartExtended';
// mui components
import { Snackbar } from '@mui/material';

const CartExtended = () => {

  const {
    cartItems,
    setCartItems,
    showSnackbar,
    handleAddToCart,
    handleSubtractFromCart,
    calculateTotal,
    createPlushiesToBuy
  } = useCartExtended();

  return (
    <>
      <CartHolder
        cartItems={cartItems}
        setCartItems={setCartItems}
        addToCart={handleAddToCart}
        subtractFromCart={handleSubtractFromCart}
        calculateTotal={calculateTotal}
        createPlushiesToBuy={createPlushiesToBuy}
      />
      <Snackbar
        open={showSnackbar}
        message="Max quantity reached"
        autoHideDuration={3000}
      />
    </>
  )
}

export default CartExtended;
