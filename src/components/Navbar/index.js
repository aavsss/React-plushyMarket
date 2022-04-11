import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Typography, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './Navbar.styles';
import { Link, useLocation } from 'react-router-dom';
// Logo
import HomeLogo from '../../images/autumn.png';
// hooks
import useNavbar from './useNavbar';

const Navbar = () => {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const { navigateToMyMarket, navigateToCart, logoutMutation, cartCount } = useNavbar();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    const renderMobileMenu = (
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
    )

    return (
        <>
            {/* <AppBar position="fixed" className={classes.AppBar} color="inherit"> */}
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={HomeLogo} alt="Bear" height="25px" className={classes.image} /> Plushy Market
                </Typography>
                <div className={classes.navBar} >
                    <h2 className={classes.navBarItem} onClick={navigateToMyMarket}>My Market</h2>
                    <h2 className={classes.navBarItem} onClick={() => logoutMutation.mutate()}>Logout</h2>
                </div>
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={cartCount} color="secondary">
                            <ShoppingCart onClick={navigateToCart} />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
            {/* </AppBar> */}
            {renderMobileMenu}
        </>
    )
}

export default Navbar;