import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { onboardRecruiter } from "../redux/actions/onbaording";

import { Step1, Step2 } from "../components/Onboarding/Recruiter";

const RecruiterOnboarding = ({ onboardRecruiterAction }) => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const history = useHistory();
  const [data, _setData] = useState({});
  const [step, _setStep] = useState(0);

  const next = (payload) => {
    _setStep(step + 1);
    _setData({ ...data, ...payload });
  };

  const back = () => {
    _setStep(step - 1);
  };

  const submitData = (step2Data) => {
    const finalData = { ...data, ...step2Data };

    onboardRecruiterAction(finalData)
      .then((result) => {
        enqueueSnackbar("Profile saved.", { variant: "success" });
        history.push("/recruiter");
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
                1: <Step2 back={back} finish={submitData} />,
              }[step]
            }
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onboardRecruiterAction: bindActionCreators(onboardRecruiter, dispatch),
});

export default connect(null, mapDispatchToProps)(RecruiterOnboarding);

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    background: "white",
    padding: 20,
    margin: "40px 0",
    borderRadius: 5,
  },
}));
