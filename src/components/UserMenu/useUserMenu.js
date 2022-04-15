import { useState } from "react"
// hooks
import useLogout from "../../hooks/useLogout";
import useNavigation from "../../hooks/useNavigation";

const useUserMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const { navigateTo } = useNavigation();
    const navigateToMyMarket = () => navigateTo('/sellerHome');

    const { logout } = useLogout();

    return {
        anchorEl,
        open,
        handleClick,
        handleClose,
        logout,
        navigateToMyMarket
    }
}

export default useUserMenu;