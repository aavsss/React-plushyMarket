import React, { useState, useEffect } from 'react';
// Components
import CartHolder from './CartHolder';
// Hooks
import useGetItemsInPlushy from './../hooks/useGetItemsInPlushy';
// mui components
import { Snackbar } from '@mui/material';

const CartExtended = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const { 
    data
  } = useGetItemsInPlushy();

  useEffect(() => {
    if (data) {
      setCartItems(data);
    }
  }, [data, setCartItems]);

  const handleAddToCart = (selectedItem) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === selectedItem.id);
      // Making sure users don't put orders above the quantity limit
      if (isItemInCart) {
        if (isItemInCart.userSelectedQuantity + 1 > isItemInCart.maxQuantityInStock) {
          setShowSnackbar(true);
          return prev;
        }
      }

      setShowSnackbar(false);

      if (isItemInCart) {
        return prev.map(item => 
          item.id === selectedItem.id
            ? {...item, userSelectedQuantity: item.userSelectedQuantity + 1}
            : item
        );
      }
      
      // First time the item is added
      return [...prev, {...selectedItem, userSelectedQuantity: 1}];
    });
  };

  const handleSubtractFromCart = (selectedItem) => {
    // To remove snack bar
    setShowSnackbar(false);
    
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === selectedItem.id);
      if (isItemInCart) {
        return prev.map(item => {
          if (item.id === selectedItem.id) {
            if (item.userSelectedQuantity === 1) return item;
            return {...item, userSelectedQuantity: item.userSelectedQuantity - 1}
          } else {
            return item;
          }
        });
      }
    });
  };

  const calculateTotal = (items) => 
    items.reduce((ack, item) => ack + item.price * item.userSelectedQuantity, 0);

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

  return(
    <>
      <CartHolder 
        cartItems={cartItems}
        setCartItems={setCartItems}
        addToCart={handleAddToCart}
        subtractFromCart={handleSubtractFromCart}
        calculateTotal={calculateTotal}
        createPlushiesToBuy={createPlushiesToBuy}
      />
      <Snackbar 
        open={showSnackbar}
        message="Max quantity reached"
        autoHideDuration={3000}
      />
    </>
  )
}

export default CartExtended;
