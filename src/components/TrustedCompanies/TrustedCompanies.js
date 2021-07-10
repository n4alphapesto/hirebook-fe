import React from 'react';

import { Typography, makeStyles, Grid } from '@material-ui/core';

const TrustedCompanies = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={12} md={6} >
                    <Typography variant="h4" align="center" className={classes.boldText}>
                        Companies Who trust us
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} justifyContent='center' alignItems='center'>
                <Grid item xs={12} md={6} >
                    <Typography variant="body2" align="center" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor!
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default TrustedCompanies;

const useStyles = makeStyles((theme) => ({
    boldText: {
        fontWeight: "bold",
    },

}));

