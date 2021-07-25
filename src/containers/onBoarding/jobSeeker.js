import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";
import { Step1, Step2, Step3 } from "../../components/Onboarding/JobSeeker";
import { saveJobSeeker } from "../../ducks/user";

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    background: "white",
    padding: 20,
    margin: "40px 0",
    borderRadius: 5,
  },
}));

const JobSeekerOnboarding = ({ saveJobSeeker, isSaving }) => {
  //const { enqueueSnackbar } = useSnackbar();
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
  useEffect(() => {
    if (isSaving === "done") {
      history.push("/jobseeker");
    }
  }, [isSaving]);
  const submitData = (step3Data) => {
    const finalData = { ...data, ...step3Data };
    saveJobSeeker(finalData);
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
                2: (
                  <Step3
                    back={back}
                    finish={submitData}
                    initialData={data}
                    isSaving={isSaving}
                  />
                ),
              }[step]
            }
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isSaving: state.user.isSavingSeekerProfile,
  errorMsg: state.user.saveSeekerProfileMsg,
});
const mapDispatchToProps = (dispatch) => ({
  saveJobSeeker(payload) {
    dispatch(saveJobSeeker(payload));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(JobSeekerOnboarding));
