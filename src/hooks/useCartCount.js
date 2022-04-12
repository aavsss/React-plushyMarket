import { selectCart, fetchInitialCartNumber } from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const useCartCount = () => {
    const cartCount = useSelector(selectCart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchInitialCartNumber());
    }, [dispatch]);
    return { cartCount };
}

export default useCartCount;