import React from 'react';
import { Container, Divider, Box } from '@material-ui/core';

import Hero from '../components/Hero/Hero';
import Mission from '../components/Mission/Mission';
import Testimonial from '../components/Testimonial/Testimonial';

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <Container maxWidth='lg'>
                <Mission />
                <Box my={10}>
                    <Divider />
                </Box>
                <Testimonial />
            </Container>
        </div>
    )
}

export default LandingPage;