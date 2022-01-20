import CartItem from "../CartItem";
import { Wrapper } from "./CartHolder.styles";
// Components
import Button from "../Button";
// Hooks
import useBuyPlushyById from './../../hooks/useBuyPlushyById';

const CartHolder = ({ cartItems, setCartItems, addToCart, subtractFromCart }) => {
  const calculateTotal = (items) => 
    items.reduce((ack, item) => ack + item.price * item.quantity, 0);

  const createPlushiesToBuy = () => {
    const plushiesToBuy = [];
    for (let i = 0; i < cartItems.length; i++) {
      plushiesToBuy.push({
        id: cartItems[i].id,
        amount: cartItems[i].quantity
      });
    }
    return plushiesToBuy;
  }

  const mutation = useBuyPlushyById(createPlushiesToBuy());

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
    }}/>
  </Wrapper>
  );
};

export default CartHolder;
