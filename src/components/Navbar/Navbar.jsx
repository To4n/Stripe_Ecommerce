import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/commerce.png'
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" className={classes.title}>
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Stripe Commerce
                    </Typography>
                    <div className={classes.grow}></div>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit" component={Link} to="/cart">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    )}
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar
