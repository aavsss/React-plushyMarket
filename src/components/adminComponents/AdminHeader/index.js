import React from 'react'
import { Toolbar, Typography } from '@material-ui/core';
import useStyles from "./AdminHeader.styles";
import HomeLogo from "../../../images/autumn.png";
import useNavbar from '../../Navbar/useNavbar';

const AdminHeader = () => {
    const classes = useStyles();
    const { navigateToHome } = useNavbar();
    return (
        <>
            <Toolbar>
                <Typography variant='h6' color='inherit' className={classes.title} onClick={navigateToHome} >
                    <img src={HomeLogo} alt='Bear' height="25px" className={classes.image} />
                    Plushy Market
                </Typography>
            </Toolbar>
        </>
    )
};

export default AdminHeader;
