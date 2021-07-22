import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Grid, Paper, makeStyles } from "@material-ui/core";

import { onBoardRecruiter } from "../../ducks/onboarding";
import { Step1, Step2 } from "../../components/Onboarding/Recruiter";

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    background: "white",
    padding: 20,
    margin: "40px 0",
    borderRadius: 5,
  },
}));

const RecruiterOnboarding = ({ onBoardRecruiter, isOnboarding }) => {
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
    if (isOnboarding === 'done') {
      history.push("/recruiter");
    }
  }, [isOnboarding])

  const submitData = (step2Data) => {
    const finalData = { ...data, ...step2Data };
    onBoardRecruiter(finalData);
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

const mapStateToProps = state => ({
  isOnboarding: state.onBoard.isRecruiterOnBoarding
});
const mapDispatchToProps = dispatch => ({
  onBoardRecruiter(payload) {
    dispatch(onBoardRecruiter(payload));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(RecruiterOnboarding));
