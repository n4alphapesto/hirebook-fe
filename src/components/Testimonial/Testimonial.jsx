import React from "react";
import styled from "styled-components";
import {
  Container,
  Grid,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";

import ashwek from "../../assets/images/ashwek-pawar.jpg";
import harsh from "../../assets/images/harsh-khandewal.jpg";

const Testimonial = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box my={5}>
        <Grid container direction="row" spacing={4}>
          <Grid item xs={12} sm={6}>
            <Img src={ashwek} />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.textContainer}>
            <Typography variant="h5">Ashwek Pawar</Typography>
            <Typography variant="subtitle1" gutterBottom>
              Full-Stack Developer
            </Typography>
            <Typography variant="body2">
              "It was a really cool experience with Hirebook. It was very simple
              and clean without the bugging from job consultants. Keep up the
              good work guys!"
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={5} mb={10}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} className={classes.textContainer}>
            <Box align="right">
              <Typography variant="h5" align="right">
                Harsh Khndewal
              </Typography>
              <Typography variant="subtitle1" gutterBottom align="right">
                DevOps Engineer
              </Typography>
              <Typography variant="body2" align="right">
                "Little did I know about the reach of Hirebook. They have
                hundreds of start-ups searching for candidates. I received a
                good number of offers!"
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Img src={harsh} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;

const Img = styled.img`
  height: auto;
  width: 100%;
  max-height: 300px;
`;

const useStyles = makeStyles((theme) => ({
  textContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
