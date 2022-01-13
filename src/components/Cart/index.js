import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCart
} from "../../features/cart/cartSlice";
// Components
import { Wrapper, Content, LogoImg } from './Cart.styles';
// Images
import CartLogo from '../../images/shopping-cart.png';

const Cart = () => {
  const cartCount = useSelector(selectCart);

  return (
    <Wrapper>
      <Content>
        <LogoImg src={CartLogo} />
        {cartCount}
      </Content>
    </Wrapper>
  )
};

export default Cart;
