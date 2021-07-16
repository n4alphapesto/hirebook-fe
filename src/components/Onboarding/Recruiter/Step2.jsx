import React, { useState } from "react";
import {
  Typography,
  TextareaAutosize,
  Grid,
  makeStyles,
  Button,
  Box,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { randomNumber } from "../../../utils/common";

const expertiseOptions = [
  { value: "fresher", label: "Fresher" },
  { value: "intermediate", label: "Intermediate" },
  { value: "expert", label: "Expert" },
];

const Step2 = ({ finish, back }) => {
  const classes = useStyles();
  const [aboutCompany, _setAboutCompany] = useState();
  const [companyPhotos, _setCompanyPhotos] = useState();
  const [linkedInProfile, _setLinkedInProfile] = useState();
  const [twitterProfile, _setTwitterProfile] = useState();
  const [facebookProfile, _setFacebookProfile] = useState();
  const [file, _setFile] = useState();
  const [isUploading, _setIsUploading] = useState(false);

  const handleNext = () => {
    const data = {};

    finish(data);
  };

  const handleBack = () => {
    back();
  };

  const handleFileChange = (event) => {
    _setIsUploading(true);

    const file = event.target.files[0];

    _setFile(file);
    //TODO: Write Logic to File Upload
  };

  return (
    <>
      <Box mb={5} align="center">
        <Typography variant="h4" className="skill_form_titile">
          Step 2/2: About Company
        </Typography>
        <Typography variant="subtitle2" className="skill_form_titile">
          Tell us about you company.
        </Typography>
      </Box>

      <Grid item>
        <Grid container direction="column">
          <form>
            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  About Company:
                </Typography>
                <TextareaAutosize
                  maxRows={7}
                  minRows={3}
                  aria-label="aboutCompany"
                  value={aboutCompany}
                  onChange={({ target }) => _setAboutCompany(aboutCompany)}
                />
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  LinkedIn Profile:
                </Typography>
                <TextField
                  fullWidth
                  required
                  placeholder="https://linkedin.com/profile/"
                  type="text"
                  size="medium"
                  variant="outlined"
                  value={linkedInProfile}
                  onChange={({ target }) => _setLinkedInProfile(target.value)}
                />
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Company Photos:
                </Typography>
                <div className={classes.fileDropZone}>
                  <input
                    className={classes.fileInputControl}
                    multiple
                    onChange={handleFileChange}
                    type="file"
                    accept="image/jpeg, image/png"
                  />
                  {isUploading && (
                    <div className={classes.loadingOverlay}>
                      <CircularProgress />
                    </div>
                  )}
                </div>
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Twitter Profile:
                </Typography>
                <TextField
                  fullWidth
                  required
                  placeholder="https://twitter.com/profile/"
                  type="text"
                  size="medium"
                  variant="outlined"
                  value={twitterProfile}
                  onChange={({ target }) => _setTwitterProfile(target.value)}
                />
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Facebook Profile:
                </Typography>
                <TextField
                  fullWidth
                  required
                  placeholder="https://facebook.com/profile"
                  type="text"
                  size="medium"
                  variant="outlined"
                  value={facebookProfile}
                  onChange={({ target }) => _setFacebookProfile(target.value)}
                />
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
                  type="submit"
                  onClick={handleBack}
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
                  Finish
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
    marginBottom: 5,
  },

  buttonContainer: {
    display: "flex",
  },
  fileDropZone: {
    minHeight: 200,
    width: "auto",
    border: "2px dashed grey",
    borderRadius: 5,
    position: "relative",
  },

  fileInputControl: {
    minHeight: 200,
    height: "100%",
    width: "100%",
    opacity: 0,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,0.1)",
  },
}));
