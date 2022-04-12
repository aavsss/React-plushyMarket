import React from "react";
import { Menu, MenuItem, IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
// hooks
import useMobileMenu from "./useMobileMenu";

const MobileMenu = ({ cartCount }) => {
    const {
        mobileMoreAnchorEl,
        mobileMenuId,
        isMobileMenuOpen,
        handleMobileMenuClose
    } = useMobileMenu();

    return (
        <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton aria-label='Show cart items' color="inherit">
                    <Badge badgeContent={cartCount} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
        </Menu>
    );
};

export default MobileMenu;