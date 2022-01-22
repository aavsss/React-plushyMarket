import React, { useState } from "react";
import CartItem from "../CartItem";
import { Wrapper } from "./CartHolder.styles";
// Components
import Button from "../Button";
// Hooks
import useBuyPlushyById from './../../hooks/useBuyPlushyById';
// Redux
import { useDispatch } from 'react-redux';
// Slice 
import { setEmpty } from "../../features/cart/cartSlice";

const CartHolder = (
  { cartItems, setCartItems, addToCart, subtractFromCart, calculateTotal, createPlushiesToBuy }) => {
  
  // mutation
  const mutation = useBuyPlushyById(createPlushiesToBuy());
  // dipatch for redux
  const dispatch = useDispatch();

  return (
  <Wrapper>
    <h2> Your shopping cart</h2>
    {cartItems.length === 0 ? <p>No items in cart.</p> : null}
    {cartItems.map(item => (
      <CartItem
        key={item.id}
        item={item}
        addToCart={addToCart}
        subtractFromCart={subtractFromCart}
      />
    ))}
    <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    <Button text="Buy" callback={() => {
      mutation.mutate(createPlushiesToBuy());
      setCartItems([]);
      dispatch(setEmpty());
    }}/>
  </Wrapper>
  );
};

export default CartHolder;
