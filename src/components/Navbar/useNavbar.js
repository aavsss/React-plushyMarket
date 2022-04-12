import { useState } from 'react';
// hooks
import useLogout from "../../hooks/useLogout";
import useCartCount from "../../hooks/useCartCount";
import useNavigation from "../../hooks/useNavigation";

const useNavbar = () => {
    const { cartCount } = useCartCount();

    const { navigateTo } = useNavigation();
    const navigateToMyMarket = () => navigateTo('/sellerHome');
    const navigateToCart = () => navigateTo('/cart');

    const { logout } = useLogout();

    return {
        navigateToMyMarket,
        navigateToCart,
        logout,
        cartCount
    }
};

export default useNavbar;
