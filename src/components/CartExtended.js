import React, { useEffect, useState } from 'react';
// Components
import CartHolder from './CartHolder';

const CartExtended = () => {
  const [cartItems, setCartItems] = useState([{
    id: 3,
    name: "Kakashi",
    price: 34,
    quantity: 10
  }, {
    id: 4,
    name: "Orochi",
    price: 45,
    quantity: 13
  }]);

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
      addToCart={handleAddToCart}
      subtractFromCart={handleSubtractFromCart}
    />
  )
}

export default CartExtended;
