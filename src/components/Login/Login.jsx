import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import { login } from '../../ducks/user';
import { setCookies } from '../../utils';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: "bold",
  },
}));

const Login = ({ signIn, isLogging, handleClose, userDetails }) => {
  const history = useHistory();
  const classes = useStyles();
  const [email, _setEmail] = useState("");
  const [password, _setPassword] = useState("");

  const redirectUser = (data) => {
    let userType = data.userType === "JOBSEEKER" ? 'jobseeker' : 'recruiter';
    let finalRoute = data.isOnboardingCompleted ? `/${userType}` : `/${userType}/onboarding`;
    history.push(finalRoute);
  };

  useEffect(() => {
    if (isLogging === 'done' && userDetails) {
      setCookies('ssoToken', userDetails.token);
      handleClose(false);
      redirectUser(userDetails)
    }
  }, [isLogging])

  const login = (e) => {
    e.preventDefault();
    signIn({
      email,
      password
    });
  };

  return (
    <Box p={2} pb={4}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <form onSubmit={login}>
            <Grid item xs={12}>
              <Box mt={5}>
                <Typography variant="subtitle2" className={classes.label}>
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  autoFocus
                  required
                  id="email_address"
                  placeholder="Enter Email Address"
                  size="small"
                  type="email"
                  variant="outlined"
                  onChange={({ target }) => _setEmail(target.value)}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Password
                </Typography>
                <TextField
                  fullWidth
                  required
                  id="password"
                  placeholder="Enter Password"
                  type="password"
                  size="small"
                  variant="outlined"
                  onChange={({ target }) => _setPassword(target.value)}
                />
              </Box>
            </Grid>

            <Box mt={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                {isLogging && <CircularProgress size={20} color="white" />}
                Login
              </Button>
            </Box>
            <Box mt={2}>
              <Button
                onClick={handleClose}
                fullWidth
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </Box>

            <Box mt={1} align="center">
              <Button color="primary">Forgot Your Password?</Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = state => ({
  loginErrorMsg: state.user.loginErrorMsg,
  isLogging: state.user.isLogging,
  userDetails: state.user.userDetails
});
const mapDispatchToProps = dispatch => ({
  signIn(payload) {
    dispatch(login(payload));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
