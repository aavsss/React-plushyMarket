import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// Slice
import { addItemNumToCart } from "../../features/cart/cartSlice";

const usePlushyInfo = (plushy) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(plushy.price);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [isAddToCartButtonDisabled, setIsAddToCartButtonDisabled] = useState(false);

    // inital check to see if we have plushies available in the backend 
    useEffect(() => {
        if (plushy.quantity - quantity <= 0) {
            setIsAddToCartButtonDisabled(true);
            setShowSnackbar(true);
            return;
        }
        setIsAddToCartButtonDisabled(false);
        setShowSnackbar(false);
    }, [plushy.quantity, quantity])

    const handleChangeInQuantity = quantity => {
        if (plushy.quantity - quantity > 0) {
            setQuantity(quantity);
            setShowSnackbar(false);
            setIsAddToCartButtonDisabled(false);
        } else {
            setShowSnackbar(true);
            setIsAddToCartButtonDisabled(true);
        }
        setPrice(quantity * plushy.price);
    };

    const dispatchAddItemNumToCart = () => dispatch(addItemNumToCart(
        {
            id: plushy.id,
            quantity
        }
    ))

    return {
        price,
        showSnackbar,
        isAddToCartButtonDisabled,
        handleChangeInQuantity,
        dispatchAddItemNumToCart
    }
}

export default usePlushyInfo;