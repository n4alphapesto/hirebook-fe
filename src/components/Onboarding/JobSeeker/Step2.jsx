import React, { useState } from 'react';
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
    makeStyles
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { locations, monthOptions } from '../../../utils/common';

const Step2 = ({ back, next }) => {
    const classes = useStyles();
    const [currentLocation, _setLocation] = useState(locations[0].value);
    const [currentSalary, _setCurrentSalary] = useState();
    const [noticePeriod, _setNoticePeriod] = useState(monthOptions[0].value);
    const [preferedLocation, _setPreferedLocation] = useState([]);

    const transformData = () => {
        const data = {
            currentLocation,
            noticePeriod,
            currentSalary
        }

        return data
    }

    const handleBack = () => {
        const data = transformData();

        back(data);
    }

    const handleNext = () => {
        const data = transformData();

        next(data);
    }


    return (
        <>
            <Box mb={5} align="center">
                <Typography
                    variant="h4"
                    className="skill_form_titile"
                >
                    Step 2/3: Specify job preferences
                </Typography>
                <Typography
                    variant="subtitle2"
                    className="skill_form_titile"
                >
                    We can find highly relevant job for you.
                </Typography>
            </Box>

            <Grid item>
                <Grid container direction="column">
                    <form>
                        <Grid item>
                            <Box mt={2}>
                                <FormControl variant="outlined" >
                                    <Typography
                                        variant="subtitle2"
                                        className={classes.label}>
                                        Where are you currently located?
                                    </Typography>
                                    <Select
                                        required
                                        value={currentLocation}
                                        onChange={({ target }) => _setLocation(target.value)}>
                                        {
                                            locations.map(location =>
                                                <MenuItem value={location.value}>{location.label}</MenuItem>
                                            )
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box mt={2}>
                                <Typography
                                    variant="subtitle2"
                                    className={classes.label}>
                                    Where are you open to working?
                                </Typography>
                                <Autocomplete
                                    required
                                    multiple
                                    options={locations}
                                    getOptionLabel={(option) => option.label}
                                    defaultValue={preferedLocation}
                                    onChange={(e, value) => _setPreferedLocation(value)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="standard"
                                            placeholder="Favorites"
                                        />
                                    )}
                                />
                            </Box>
                        </Grid>

                        <Grid item>
                            <Box mt={2}>
                                <Typography
                                    variant="subtitle2"
                                    className={classes.label}>
                                    What is your current annual salary? Don't specify offer in hand here.
                                </Typography>
                                <FormControl variant="outlined">
                                    <OutlinedInput
                                        required
                                        id="outlined-adornment-weight"
                                        value={currentSalary}
                                        onChange={({ target }) => _setCurrentSalary(target.value)}
                                        startAdornment={<InputAdornment position="start">RS.</InputAdornment>}
                                        endAdornment={<InputAdornment position="end">LA</InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'experience',
                                        }}
                                        labelWidth={0}
                                    />
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item>
                            <Box mt={2}>
                                <FormControl variant="outlined">
                                    <Typography
                                        variant="subtitle2"
                                        className={classes.label}>
                                        What is your notice period?
                                    </Typography>
                                    <Select
                                        required
                                        value={noticePeriod}
                                        onChange={({ target }) => _setNoticePeriod(target.value)}
                                    >
                                        {
                                            monthOptions.map((option) =>
                                                <MenuItem value={option.value}>{option.label}</MenuItem>

                                            )
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item>
                            <Box mt={4} justifyContent="space-between" className={classes.buttonContainer}>
                                <Button type="submit" onClick={handleBack} startIcon={<ArrowBackIcon />}>
                                    Back
                                </Button>

                                <Button type="submit" onClick={handleNext} endIcon={<ArrowForwardIcon />} variant="outlined" color="primary"  >
                                    Next
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    );
}

export default Step2;

const useStyles = makeStyles((theme) => ({
    label: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        display: 'flex'
    }
}));