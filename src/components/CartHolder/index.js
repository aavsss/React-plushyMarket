import CartItem from "../CartItem";
import { Wrapper } from "./CartHolder.styles";

const CartHolder = ({ cartItems }) => {
  const calculateTotal = (items) => 
    items.reduce((ack, item) => ack + item.price * item.quantity, 0);

  return (
    <Wrapper>
      <h2> Your shopping cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default CartHolder;
