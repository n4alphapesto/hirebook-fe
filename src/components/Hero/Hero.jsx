import React from "react";
import styled from "styled-components";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";

import HeroImage from "../../assets/images/hero-bg.png";
import HeroImageSm from "../../assets/images/hero-bg-sm.jpg";

const Div = styled.div`
  background: url("${HeroImage}") no-repeat center;
  height: auto;
  min-height: 500px;
  background-size: cover;

  @media (max-width: 959px) {
    background-image: url("${HeroImageSm}");
  }
`;

const useStyles = makeStyles((theme) => ({
  box: {
    height: "100%",
  },
  gridContainer: {
    minHeight: 500,
    height: "auto",
    alignContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    },
  },

  gridItem: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 300,
    },
  },

  heroText: {
    fontWeight: "900",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.gridContainer}
      >
        <Grid item xs={12} sm={4} md={7} lg={7}></Grid>
        <Grid item xs={10} sm={8} md={5} lg={5} className={classes.gridItem}>
          <Box alignItems="center" className={classes.box}>
            <Typography variant="h3" className={classes.heroText}>
              Hirebook is an exclusive network of top talents and hiring
              companies.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Div>
  );
};

export default Hero;
