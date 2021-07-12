import React from 'react';
import styled from 'styled-components';
import { Grid, Typography, Box, makeStyles } from '@material-ui/core';

import HeroImage from '../../assets/images/hero-bg.png';
import HeroImageSm from '../../assets/images/hero-bg-sm.jpg';

const Hero = () => {
    const classes = useStyles();
    return (
        <Div>
            <Grid container direction="column" alignItems="flex-end" justifyContent="center" spacing={4} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box alignItems='center' className={classes.box}>
                        <Typography variant='h4'>Hirebook is an exclusive network of top talents and hiring companies.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Div>
    )
}


export default Hero;


const Div = styled.div`
    background: url('${HeroImage}') no-repeat center;
    height: auto;
    min-height: 500px;
    background-size: cover;

    @media (max-width: 768px) {
        background-image: url('${HeroImageSm}');
    }
`;

const useStyles = makeStyles(theme => ({
    box: {
        height: '100%'
    },
    gridContainer: {
        minHeight: 500,
        height: 'auto'
    }
}))