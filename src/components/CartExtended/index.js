import React from 'react';
// Components
import CartHolder from '../CartHolder';
import Navbar from '../Navbar';
// Hooks
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
      <Navbar />
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
