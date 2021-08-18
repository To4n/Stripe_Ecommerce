import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';

const Checkout = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout} >
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper  activeStep={0} className={classes.stepper}></Stepper>
                </Paper>

            </main>

        </>
    )
}

export default Checkout
