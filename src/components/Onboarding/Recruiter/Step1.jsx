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
import { useSnackbar } from "notistack";

import { locations } from "../../../utils/common";
import { useEffect } from "react";

const Step1 = ({ next, initialData }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [companyName, _setCompanyName] = useState("");
  const [userRole, _setUserRole] = useState();
  const [mobileNo, _setMobileNo] = useState("");
  const [companyLocations, _setCompanyLocations] = useState([]);
  const [foundationYear, _setFoundationYear] = useState();
  const [noOfEmployees, _setNoOfEmployee] = useState();

  useEffect(() => {
    if (initialData.companyName) _setCompanyName(initialData.companyName);
    if (initialData.userRole) _setUserRole(initialData.userRole);
    if (initialData.mobileNo) _setMobileNo(initialData.mobileNo);
    if (initialData.foundationYear)
      _setFoundationYear(initialData.foundationYear);
    if (initialData.noOfEmployees) _setNoOfEmployee(initialData.noOfEmployees);
    if (initialData.companyLocations) {
      const compnayLoc = initialData.companyLocations.map((loc) =>
        locations.find((option) => option.value === loc)
      );
      _setCompanyLocations(compnayLoc);
    }
  }, [initialData]);

  const getYearOptions = () => {
    const now = new Date();
    const year = now.getFullYear();
    const yearOptions = [];

    for (let i = year; i >= 1970; i--) {
      yearOptions.push(
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }

    return yearOptions;
  };

  const handleNext = () => {
    if (!companyName)
      return enqueueSnackbar("Company Name is Required.", {
        variant: "error",
      });
    if (!userRole)
      return enqueueSnackbar("Please select your role.", {
        variant: "error",
      });
    if (!mobileNo)
      return enqueueSnackbar("Mobile no is Required.", {
        variant: "error",
      });
    if (!/^[0-9]{10}$/.test(mobileNo))
      return enqueueSnackbar("Enter valid 10 digit Mobile no.", {
        variant: "error",
      });
    if (!companyLocations.length)
      return enqueueSnackbar("Please add your company's locations.", {
        variant: "error",
      });
    if (!foundationYear)
      return enqueueSnackbar("Foundation is required.", {
        variant: "error",
      });
    if (!noOfEmployees)
      return enqueueSnackbar("No of Employees is required.", {
        variant: "error",
      });

    const data = {
      companyName,
      userRole,
      mobileNo,
      locations: companyLocations.map((location) => location.value),
      foundationYear,
      noOfEmployees,
    };

    next(data);
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

      <form>
        <Grid container direction="column">
          <Grid item xs={12} md={8}>
            <Box mt={2}>
              <Typography variant="subtitle2" className={classes.label}>
                Company Name?
              </Typography>
              <TextField
                required
                fullWidth
                placeholder="Company Name"
                type="text"
                size="medium"
                variant="outlined"
                value={companyName}
                onChange={({ target }) => _setCompanyName(target.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box mt={2}>
              <FormControl fullWidth variant="outlined">
                <Typography variant="subtitle2" className={classes.label}>
                  Your Role:
                </Typography>
                <Select
                  required
                  value={`${userRole}`}
                  onChange={({ target }) => _setUserRole(target.value)}
                >
                  <MenuItem value={"Talent Acquistion Manager"}>
                    Talent Acquistion Manager
                  </MenuItem>
                  <MenuItem value={"Human Resource"}>Human Resource</MenuItem>
                  <MenuItem value={"CEO"}>CEO</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box mt={2}>
              <Typography variant="subtitle2" className={classes.label}>
                Mobile No
              </Typography>
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  value={mobileNo}
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

          <Grid item xs={12} md={8}>
            <Box mt={2}>
              <Typography variant="subtitle2" className={classes.label}>
                Company Locations:
              </Typography>
              <Autocomplete
                fullWidth
                required
                multiple
                options={locations}
                getOptionLabel={(option) => option.label}
                value={companyLocations}
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

          <Grid item xs={12} md={8}>
            <Box mt={2}>
              <FormControl fullWidth variant="outlined">
                <Typography variant="subtitle2" className={classes.label}>
                  Foundation Year
                </Typography>
                <Select
                  required
                  value={`${foundationYear}`}
                  onChange={({ target }) => _setFoundationYear(target.value)}
                >
                  {getYearOptions().map((option) => option)}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box mt={2}>
              <Typography variant="subtitle2" className={classes.label}>
                No Of Employees
              </Typography>
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  fullWidth
                  value={noOfEmployees}
                  labelWidth={0}
                  onChange={({ target }) => _setNoOfEmployee(target.value)}
                />
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
        </Grid>
      </form>
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
