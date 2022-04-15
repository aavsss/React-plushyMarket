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
    const navigateToHome = () => navigateTo('/home');

    const { logout } = useLogout();

    return {
        navigateToMyMarket,
        navigateToCart,
        navigateToHome,
        logout,
        cartCount
    }
};

export default useNavbar;
