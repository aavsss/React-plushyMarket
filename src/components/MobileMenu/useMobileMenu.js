import { useState } from "react";

const useMobileMenu = () => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    return {
        mobileMoreAnchorEl,
        mobileMenuId,
        isMobileMenuOpen,
        handleMobileMenuClose
    }
};

export default useMobileMenu;