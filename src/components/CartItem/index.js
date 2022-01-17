import Button from '@mui/material/Button';
// Stytes
import { Wrapper } from './CartItem.styles';

const CartItem = ({ item, addToCart, subtractFromCart }) => (
  <Wrapper>
      <div>
        <h3>{item.name}</h3>
        <div className='information'>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
        </div>
        <div className='buttons'>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => subtractFromCart(item)}
          >
            -
          </Button>
          <p>{item.quantity}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => addToCart(item)}
          >
            + 
          </Button>
        </div>
      </div>
    {/* Img */}
  </Wrapper>
);

export default CartItem;