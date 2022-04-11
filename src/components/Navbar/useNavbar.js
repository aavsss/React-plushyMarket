import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, fetchInitialCartNumber } from "../../features/cart/cartSlice";
// hooks
import useLogout from "../../hooks/useLogout";
import { useEffect } from "react";

const useNavbar = () => {
    const cartCount = useSelector(selectCart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchInitialCartNumber());
    }, [dispatch]);

    const navigate = useNavigate();
    const navigateToMyMarket = () => navigate('/sellerHome');
    const navigateToCart = () => navigate('/cart');

    const { logoutMutation } = useLogout();

    return {
        navigateToMyMarket,
        navigateToCart,
        logoutMutation,
        cartCount
    }
};

export default useNavbar;
