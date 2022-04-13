import { useState, useEffect } from 'react';
// Hooks
import useGetItemsInCart from "../../hooks/useGetItemsInPlushy";

const useCartExtended = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showSnackbar, setShowSnackbar] = useState(false);

    const { data } = useGetItemsInCart();

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
                        ? { ...item, userSelectedQuantity: item.userSelectedQuantity + 1 }
                        : item
                );
            }

            // First time the item is added
            return [...prev, { ...selectedItem, userSelectedQuantity: 1 }];
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
                        return { ...item, userSelectedQuantity: item.userSelectedQuantity - 1 }
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
                amount: cartItems[i].userSelectedQuantity
            });
        }
        return plushiesToBuy;
    }

    return {
        cartItems,
        setCartItems,
        showSnackbar,
        handleAddToCart,
        handleSubtractFromCart,
        calculateTotal,
        createPlushiesToBuy
    }

};

export default useCartExtended;