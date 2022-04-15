import { useState } from 'react';
// hooks
import useLogout from "../../hooks/useLogout";
import useCartCount from "../../hooks/useCartCount";
import useNavigation from "../../hooks/useNavigation";

const useNavbar = () => {
    const { cartCount } = useCartCount();

    const { navigateTo } = useNavigation();
    const navigateToCart = () => navigateTo('/cart');
    const navigateToHome = () => navigateTo('/home');


    return {
        navigateToCart,
        navigateToHome,
        cartCount
    }
};

export default useNavbar;
