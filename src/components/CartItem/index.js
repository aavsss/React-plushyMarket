import Button from '@mui/material/Button';
// Stytes
import { Wrapper } from '../Button/Button.styles';

const CartItem = ({ item }) => {
  <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className='information'>
          <p>Price: $123</p>
          <p>Total: $123</p>
        </div>
        <div className='buttons'>
          <Button
            size='small'
            disableElevation
            variant='contained'
          >
            -
          </Button>
          <p>Amount</p>
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
}

export default CartItem;