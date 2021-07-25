import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";

import { saveRecruiter } from "../../ducks/user";
import { Step1, Step2 } from "../../components/Onboarding/Recruiter";

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    background: "white",
    padding: 20,
    margin: "40px 0",
    borderRadius: 5,
  },
}));

const RecruiterOnboarding = ({ saveRecruiter, isSaving }) => {
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

  useEffect(() => {
    if (isSaving === "done") {
      history.push("/recruiter");
    }
  }, [isSaving]);

  const submitData = (step2Data) => {
    const finalData = { ...data, ...step2Data };
    saveRecruiter(finalData);
  };

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={6}>
          <Paper elevation={3} className={classes.stepContainer}>
            {
              {
                0: <Step1 next={next} initialData={data} />,
                1: (
                  <Step2 back={back} finish={submitData} isSaving={isSaving} />
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
  isSaving: state.user.isSavingRecruiterProfile,
  errorMsg: state.user.saveRecruiterProfileMsg,
});
const mapDispatchToProps = (dispatch) => ({
  saveRecruiter(payload) {
    dispatch(saveRecruiter(payload));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(RecruiterOnboarding));
