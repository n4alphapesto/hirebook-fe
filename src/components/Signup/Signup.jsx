import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import OtpInput from "react-otp-input";
import { register, verify } from "../../redux/actions/auth";

import "./style.css";

const Signup = ({ isSigning, actions, closeDialog }) => {
  const classes = useStyles();
  const [userType, _setUserType] = useState("JOBSEEKER");
  const [name, _setName] = useState("");
  const [email, _setEmail] = useState("");
  const [password, _setPassword] = useState("");
  const [showOTP, _setShowOTP] = useState(false);
  const [otp, _setOTP] = useState(false);

  const handleChange = (otp) => _setOTP(otp);

  const onSubmit = (e) => {
    e.preventDefault();

    actions.register({ email, password, name, userType }).then((result) => {
      _setShowOTP(true);
    });
  };

  const verifyOTP = () => {
    actions.verify({ email, otp }).then((result) => {
      _setShowOTP(true);
    });
  };

  return (
    <Box m={2} pb={4}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Signup
          </Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <form onSubmit={onSubmit}>
            <Grid item>
              <Box mt={5}>
                <Typography variant="subtitle2" className={classes.label}>
                  Are You a Recuiter or Job Seeker ?
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    name="userType"
                    value={userType}
                    onChange={({ target }) => _setUserType(target.value)}
                  >
                    <FormControlLabel
                      value="JOBSEEKER"
                      control={<Radio autoFocus color="primary" />}
                      label="Job Seeker"
                    />

                    <FormControlLabel
                      value="RECRUITER"
                      control={<Radio color="primary" />}
                      label="Recruiter"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mt={1}>
                <Typography variant="subtitle2" className={classes.label}>
                  Your Name
                </Typography>
                <TextField
                  fullWidth
                  required
                  autoFocus
                  id="full_name"
                  placeholder="Enter Your Name"
                  size="small"
                  type="text"
                  variant="outlined"
                  className="form_input"
                  onChange={({ target }) => _setName(target.value)}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  required
                  id="email_address"
                  placeholder="Enter Email Address"
                  size="small"
                  type="email"
                  variant="outlined"
                  className="form_input"
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
                  className="form_input"
                  onChange={({ target }) => _setPassword(target.value)}
                />
              </Box>
            </Grid>

            <Box mt={2}>
              <Button
                fullWidth
                disabled={showOTP}
                type="submit"
                variant="contained"
                color="primary"
              >
                {isSigning && <CircularProgress size={20} color="white" />}
                Signup
              </Button>
            </Box>
          </form>
          {showOTP && (
            <Grid item>
              <Box mt={5}>
                <Typography variant="content">
                  We have sent an OTP to above email address. Please check your
                  Inbox and enter that OTP below.
                </Typography>
              </Box>
              <Box align="right">
                <Button color="primary">Resend OTP</Button>
              </Box>
              <Box mt={2} className={classes.otpContainer}>
                <OtpInput
                  shouldAutoFocus
                  inputStyle="inputStyle"
                  value={otp}
                  onChange={handleChange}
                  numInputs={4}
                  inputStyles={{
                    padding: 10,
                    margin: "0 10px",
                  }}
                />
              </Box>
              <Box mt={3}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={verifyOTP}
                >
                  Verify
                </Button>
              </Box>
            </Grid>
          )}
          <Box mt={3}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={closeDialog}
            >
              Cancel
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  isSigning: state.userReducer.isSigning,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ register, verify }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: "bold",
  },

  otpContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));
