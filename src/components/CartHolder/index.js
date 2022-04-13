import React from "react";
import CartItem from "../CartItem";
import { Wrapper } from "./CartHolder.styles";
// Components
import Button from "../Button";
// Hooks
import useCartHolder from "./useCartHolder";

const CartHolder = ({
  cartItems,
  setCartItems,
  addToCart,
  subtractFromCart,
  calculateTotal,
  createPlushiesToBuy
}) => {

  const { buyPlushy } = useCartHolder(createPlushiesToBuy, setCartItems);

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
      <Button text="Buy" callback={buyPlushy} />
    </Wrapper>
  );
};

export default CartHolder;
