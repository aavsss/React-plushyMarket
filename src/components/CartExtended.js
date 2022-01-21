import React, { useState, useEffect } from 'react';
// Components
import CartHolder from './CartHolder';
// Hooks
import useGetItemsInPlushy from './../hooks/useGetItemsInPlushy';

const CartExtended = () => {
  const [cartItems, setCartItems] = useState([]);

  const { 
    data
  } = useGetItemsInPlushy();

  useEffect(() => {
    if (data) {
      setCartItems(data);
      console.log("data", data);
    }
  }, [data, setCartItems]);

  const handleAddToCart = (selectedItem) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === selectedItem.id);
      if (isItemInCart) {
        return prev.map(item => 
          item.id === selectedItem.id
            ? {...item, quantity: item.quantity + 1}
            : item
        );
      }
      // First time the item is added
      return [...prev, {...selectedItem, amount: 1}];
    });
  };

  const handleSubtractFromCart = (selectedItem) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === selectedItem.id);
      if (isItemInCart) {
        return prev.map(item => {
          if (item.id === selectedItem.id) {
            if (item.quantity === 1) return item;
            return {...item, quantity: item.quantity - 1}
          } else {
            return item;
          }
        });
      }
    });
  };

  return(
    <CartHolder 
      cartItems={cartItems}
      setCartItems={setCartItems}
      addToCart={handleAddToCart}
      subtractFromCart={handleSubtractFromCart}
    />
  )
}

export default CartExtended;
