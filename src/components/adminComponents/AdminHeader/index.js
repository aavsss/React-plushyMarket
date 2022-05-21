import React from 'react'
import { Toolbar, Typography } from '@material-ui/core';
import useStyles from "./AdminHeader.styles";
import HomeLogo from "../../../images/autumn.png";

const AdminHeader = () => {
    const classes = useStyles();
    return (
        <>
            <Toolbar>
                <Typography variant='h6' color='inherit' className={classes.title} >
                    <img src={HomeLogo} alt='Bear' height="25px" className={classes.image} />
                    Plushy Market
                </Typography>
            </Toolbar>
        </>
    )
};

export default AdminHeader;
