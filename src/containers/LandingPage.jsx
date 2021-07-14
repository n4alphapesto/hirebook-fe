import React from 'react';
import TrustedCompanies from '../components/TrustedCompanies/TrustedCompanies'


import { Container, Divider, Box, Link, Typography } from '@material-ui/core';

import Hero from '../components/Hero/Hero';
import Mission from '../components/Mission/Mission';
import Testimonial from '../components/Testimonial/Testimonial';

import { Navbar, Footer, PopUpComponent } from '../common'

const LandingPage = () => {
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSignup, setOpenSignup] = React.useState(false);

    const handleOpenLogin = () => {
        setOpenLogin(true);
    };

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    const handleOpenSignup = () => {
        setOpenSignup(true);
    };

    const handleCloseSignup = () => {
        setOpenSignup(false);
    };

    return (
        <div>
            <Navbar>
                <Link underline='none' onClick={handleOpenLogin}>LOGIN</Link>
                <Link underline='none' onClick={handleOpenSignup}>SIGNUP</Link>
            </Navbar>
            <PopUpComponent open={openLogin} handleClose={handleCloseLogin}>
                <Typography>login component</Typography>
            </PopUpComponent>
            <PopUpComponent open={openSignup} handleClose={handleCloseSignup}>
                <Typography>signup component</Typography>
            </PopUpComponent>
            <Hero />
            <Container maxWidth='lg'>
                <Mission />
                <Box my={10}>
                    <Divider />
                </Box>
                <Testimonial />
                <TrustedCompanies />
            </Container>
            <Footer />
        </div>
    )
}

export default LandingPage;