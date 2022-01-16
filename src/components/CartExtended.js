import React from 'react';
// Components
import CartHolder from './CartHolder';

const CartExtended = () => {
  const item = {
    id: 3,
    name: "Kakashi",
    price: 34,
    quantity: 10
  };

  return(
    <CartHolder cartItems={[item]}/>
  )
}

export default CartExtended;
