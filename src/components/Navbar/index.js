import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Typography, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './Navbar.styles';
// Logo
import HomeLogo from '../../images/autumn.png';
// hooks
import useNavbar from './useNavbar';
// components
import MobileMenu from '../MobileMenu';

const Navbar = () => {
    const classes = useStyles();

    const { navigateToMyMarket, navigateToCart, logout, cartCount } = useNavbar();

    return (
        <>
            {/* <AppBar position="fixed" className={classes.AppBar} color="inherit"> */}
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={HomeLogo} alt="Bear" height="25px" className={classes.image} /> Plushy Market
                </Typography>
                <div className={classes.navBar} >
                    <h2 className={classes.navBarItem} onClick={navigateToMyMarket}>My Market</h2>
                    <h2 className={classes.navBarItem} onClick={logout}>Logout</h2>
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
            <MobileMenu cartCount={cartCount} />
        </>
    )
}

export default Navbar;