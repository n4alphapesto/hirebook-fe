import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  OutlinedInput,
  InputAdornment,
  Grid,
  makeStyles,
  Button,
  Box,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { locations, randomNumber } from "../../../utils/common";

const Step1 = ({ next }) => {
  const classes = useStyles();
  const [companyName, _setCompanyName] = useState("");
  const [userRole, _setUserRole] = useState();
  const [mobileNo, _setMobileNo] = useState("");
  const [companyLocations, _setCompanyLocations] = useState();
  const [foundationYear, _setFoundationYear] = useState();
  const [noOfEmployee, _setNoOfEmployee] = useState();

  const getYearOptions = () => {
    const now = new Date();
    const year = now.getFullYear();
    const yearOptions = [];

    for (let i = year; i >= 1970; i--) {
      yearOptions.push(<MenuItem value={i}>{i}</MenuItem>);
    }

    return yearOptions;
  };

  const handleNext = () => {
    next();
  };

  return (
    <>
      <Box mb={5} align="center">
        <Typography variant="h4" className="skill_form_titile">
          Step 1/2: Quick Info
        </Typography>
        <Typography variant="subtitle2" className="skill_form_titile">
          Hi, We just need quick info of your company.
        </Typography>
      </Box>

      <Grid item>
        <Grid container direction="column">
          <form>
            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Company Name?
                </Typography>
                <TextField
                  required
                  placeholder="Company Name"
                  type="text"
                  size="medium"
                  variant="outlined"
                  value={companyName}
                  onChange={({ target }) => _setCompanyName(target.value)}
                />
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Your Role
                </Typography>
                <FormControl variant="outlined">
                  <Select
                    fullWidth
                    required
                    value={userRole}
                    onChange={({ target }) => _setUserRole(target.value)}
                  >
                    <MenuItem value={10}>Talent Acquistion Manager</MenuItem>
                    <MenuItem value={20}>Human Resource</MenuItem>
                    <MenuItem value={30}>CEO</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Mobile No
                </Typography>
                <FormControl variant="outlined">
                  <OutlinedInput
                    value={mobileNo}
                    placeholder="e.g, 2.4"
                    startAdornment={
                      <InputAdornment position="start">+91</InputAdornment>
                    }
                    inputProps={{
                      "aria-label": "mobileNo",
                    }}
                    labelWidth={0}
                    onChange={({ target }) => _setMobileNo(target.value)}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Company Locations:
                </Typography>
                <Autocomplete
                  required
                  multiple
                  options={locations}
                  getOptionLabel={(option) => option.label}
                  defaultValue={companyLocations}
                  onChange={(e, value) => _setCompanyLocations(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      placeholder="Locations"
                    />
                  )}
                />
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <FormControl variant="outlined">
                  <Typography variant="subtitle2" className={classes.label}>
                    Foundation Year
                  </Typography>
                  <Select
                    required
                    value={foundationYear}
                    onChange={({ target }) => _setFoundationYear(target.value)}
                  >
                    {getYearOptions().map((option) => option)}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item>
              <Box
                mt={4}
                justifyContent="flex-end"
                className={classes.buttonContainer}
              >
                <Button
                  size="large"
                  onClick={handleNext}
                  endIcon={<ArrowForwardIcon />}
                  variant="outlined"
                  color="primary"
                >
                  Next
                </Button>
              </Box>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Step1;

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  buttonContainer: {
    display: "flex",
  },
}));
