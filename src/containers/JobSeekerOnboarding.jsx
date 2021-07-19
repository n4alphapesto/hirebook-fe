import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { bindActionCreators } from "redux";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";
import { Step1, Step2, Step3 } from "../components/Onboarding/JobSeeker";
import { onboardJobSeeker } from "../redux/actions/onbaording";

const JobSeekerOnboarding = ({ onboardJobSeekerAction }) => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const classes = useStyles();
  const [data, _setData] = useState({});
  const [step, _setStep] = useState(0);

  const next = (payload) => {
    _setStep(step + 1);
    _setData({ ...data, ...payload });
  };

  const back = () => {
    _setStep(step - 1);
  };

  const submitData = (step3Data) => {
    const finalData = { ...data, ...step3Data };

    onboardJobSeekerAction(finalData)
      .then((result) => {
        enqueueSnackbar("Profile saved.", { variant: "success" });
        history.push("/jobseeker");
      })
      .catch((error) => {
        enqueueSnackbar("Error saving profile.", { variant: "error" });
      });
  };

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={6}>
          <Paper elevation={3} className={classes.stepContainer}>
            {
              {
                0: <Step1 next={next} initialData={data} />,
                1: <Step2 next={next} back={back} initialData={data} />,
                2: <Step3 back={back} finish={submitData} initialData={data} />,
              }[step]
            }
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onboardJobSeekerAction: bindActionCreators(onboardJobSeeker, dispatch),
});

export default connect(null, mapDispatchToProps)(JobSeekerOnboarding);

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    background: "white",
    padding: 20,
    margin: "40px 0",
    borderRadius: 5,
  },
}));
