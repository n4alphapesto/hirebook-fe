import React, { useState, useEffect } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  OutlinedInput,
  InputAdornment,
  Grid,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { locations, monthOptions } from "../../../utils/common";

const Step2 = ({ back, next, initialData }) => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [currentLocation, _setLocation] = useState(locations[0].value);
  const [currentCTC, _setCurrentCTC] = useState();
  const [noticePeriod, _setNoticePeriod] = useState(monthOptions[0].value);
  const [openToWork, _setOpenToWork] = useState([]);

  useEffect(() => {
    if (initialData.currentLocation) _setLocation(initialData.currentLocation);
    if (initialData.currentCTC) _setCurrentCTC(initialData.currentCTC);
    if (initialData.noticePeriod) _setNoticePeriod(initialData.noticePeriod);
    if (initialData.openToWork) {
      const prefferedLocations = initialData.skills.map((loc) => {
        locations.find((option) => option.value === loc);
      });
      _setOpenToWork(prefferedLocations);
    }
  }, []);

  const transformData = () => {
    if (!currentLocation) {
      enqueueSnackbar("Current Location is Required.", { variant: "error" });
      return;
    }
    if (!openToWork.length) {
      enqueueSnackbar("Please add preferred job locations.", {
        variant: "error",
      });
      return;
    }
    if (!currentCTC) {
      enqueueSnackbar("Current Salary is Required.", { variant: "error" });
      return;
    }
    if (!noticePeriod) {
      enqueueSnackbar("Notice Period is Required.", { variant: "error" });
      return;
    }

    const data = {
      currentLocation,
      noticePeriod,
      currentCTC,
      openToWork: openToWork.map((location) => location.value),
    };

    return data;
  };

  const handleNext = () => {
    const data = transformData();

    data && next(data);
  };

  return (
    <>
      <Box mb={5} align="center">
        <Typography variant="h4" className="skill_form_titile">
          Step 2/3: Specify job preferences
        </Typography>
        <Typography variant="subtitle2" className="skill_form_titile">
          We can find highly relevant job for you.
        </Typography>
      </Box>

      <Grid item>
        <Grid container direction="column">
          <form>
            <Grid item>
              <Box mt={2}>
                <FormControl variant="outlined">
                  <Typography variant="subtitle2" className={classes.label}>
                    Where are you currently located?
                  </Typography>
                  <Select
                    required
                    value={currentLocation}
                    onChange={({ target }) => _setLocation(target.value)}
                  >
                    {locations.map((location) => (
                      <MenuItem value={location.value}>
                        {location.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Where are you open to working?
                </Typography>
                <Autocomplete
                  required
                  multiple
                  options={locations}
                  getOptionLabel={(option) => option.label}
                  defaultValue={openToWork}
                  onChange={(e, value) => _setOpenToWork(value)}
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
                <Typography variant="subtitle2" className={classes.label}>
                  What is your current annual salary? Don't specify offer in
                  hand here.
                </Typography>
                <FormControl variant="outlined">
                  <OutlinedInput
                    required
                    id="outlined-adornment-weight"
                    value={currentCTC}
                    type="number"
                    onChange={({ target }) => _setCurrentCTC(target.value)}
                    startAdornment={
                      <InputAdornment position="start">RS.</InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">LA</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "experience",
                    }}
                    labelWidth={0}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <FormControl variant="outlined">
                  <Typography variant="subtitle2" className={classes.label}>
                    What is your notice period?
                  </Typography>
                  <Select
                    required
                    value={noticePeriod}
                    onChange={({ target }) => _setNoticePeriod(target.value)}
                  >
                    {monthOptions.map((option) => (
                      <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item>
              <Box
                mt={4}
                justifyContent="space-between"
                className={classes.buttonContainer}
              >
                <Button
                  size="large"
                  onClick={back}
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>

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

export default Step2;

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
  },
}));
