import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCart
} from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
// Components
import { Wrapper, Content, LogoImg } from './Cart.styles';
// Images
import CartLogo from '../../images/shopping-cart.png';
// Slice
import { fetchInitialCartNumber } from '../../features/cart/cartSlice';

const Cart = () => {
  const cartCount = useSelector(selectCart);
  const dispatch = useDispatch();
  // crashes the app currently
  useEffect(() => {
    dispatch(fetchInitialCartNumber());
  }, [dispatch]);

  return (
    <Link to={'/cart'} >
      <Wrapper>
        <Content>
          <LogoImg src={CartLogo} />
          {/* {cartCount} */}
          *
        </Content>
      </Wrapper>
    </Link>
  )
};

export default Cart;
