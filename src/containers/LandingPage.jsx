import React from "react";
import TrustedCompanies from "../components/TrustedCompanies/TrustedCompanies";

import { Container, Divider, Box, Link, Typography } from "@material-ui/core";

import Hero from "../components/Hero/Hero";
import Mission from "../components/Mission/Mission";
import Testimonial from "../components/Testimonial/Testimonial";

import { Navbar, Footer, PopUpComponent } from "../common";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Container maxWidth="lg">
        <Mission />
        <Box my={10}>
          <Divider />
        </Box>
        <Testimonial />
        <TrustedCompanies />
      </Container>
    </div>
  );
};

export default LandingPage;
