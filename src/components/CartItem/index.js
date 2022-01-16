import Button from '@mui/material/Button';
// Stytes
import { Wrapper } from './CartItem.styles';

const CartItem = ({ item }) => (
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
          >
            -
          </Button>
          <p>{item.quantity}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
          >
            + 
          </Button>
        </div>
      </div>
    {/* Img */}
  </Wrapper>
);

export default CartItem;