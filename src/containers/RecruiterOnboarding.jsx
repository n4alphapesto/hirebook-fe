import React, { useState } from "react";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";

import { Step1, Step2 } from "../components/Onboarding/Recruiter";

const RecruiterOnboarding = () => {
  const classes = useStyles();
  const [data, _setData] = useState({});
  const [step, _setStep] = useState(0);

  const next = (payload) => {
    console.log(" data ", data);
    _setStep(step + 1);
    _setData({ ...data, ...payload });
  };

  const back = (payload) => {
    _setStep(step - 1);
    _setData({ ...data, ...payload });
  };

  const submitData = () => {};

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={6}>
          <Paper elevation={3} className={classes.stepContainer}>
            {
              {
                0: <Step1 next={next} />,
                1: <Step2 back={back} finish={submitData} />,
              }[step]
            }
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecruiterOnboarding;

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    background: "white",
    padding: 20,
    margin: "40px 0",
    borderRadius: 5,
  },
}));
