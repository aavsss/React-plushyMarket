import React from 'react';
import { Toolbar, IconButton, Typography, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './Navbar.styles';
// Logo
import HomeLogo from '../../images/autumn.png';
// hooks
import useNavbar from './useNavbar';
// components
import MobileMenu from '../MobileMenu';
import UserMenu from '../UserMenu';

const Navbar = () => {
    const classes = useStyles();

    const {
        navigateToCart,
        navigateToHome,
        cartCount
    } = useNavbar();

    return (
        <>
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit" onClick={navigateToHome}>
                    <img src={HomeLogo} alt="Bear" height="25px" className={classes.image} /> Plushy Market
                </Typography>
                <div className={classes.navBar} >
                    <UserMenu />
                </div>
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={cartCount} color="secondary">
                            <ShoppingCart onClick={navigateToCart} />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
            <MobileMenu cartCount={cartCount} />
        </>
    )
}

export default Navbar;