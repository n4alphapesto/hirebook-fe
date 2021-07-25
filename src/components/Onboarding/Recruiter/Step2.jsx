import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Button,
  Box,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { upload } from "../../../ducks/upload";

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

const Step2 = ({
  finish,
  back,
  upload,
  companyLogo_Status,
  companyPhotos_Status,
  companyLogo_Msg,
  companyPhotos_Msg,
  isSaving,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [aboutCompany, _setAboutCompany] = useState("");
  const [website, _setWebsite] = useState();
  const [linkedInProfile, _setLinkedInProfile] = useState();
  const [twitterProfile, _setTwitterProfile] = useState();
  const [facebookProfile, _setFacebookProfile] = useState();
  const [companyPhotos, _setCompanyPhotos] = useState([]);
  const [companyLogo, _setCompnayLogo] = useState("");

  useEffect(() => {
    if (companyPhotos_Status === "done") {
      _setCompanyPhotos(companyPhotos_Msg);
    }
  }, [companyPhotos_Status]);

  useEffect(() => {
    if (companyLogo_Status === "done") {
      _setCompnayLogo(companyLogo_Msg[0]);
    }
  }, [companyLogo_Status]);

  const handleFinish = () => {
    if (!aboutCompany)
      return enqueueSnackbar("Please add about your compnay.", {
        variant: "error",
      });
    if (!website)
      return enqueueSnackbar("Please add about your compnay.", {
        variant: "error",
      });
    if (!companyPhotos.length)
      return enqueueSnackbar("Please upload your company photos.", {
        variant: "error",
      });
    if (!companyLogo)
      return enqueueSnackbar("Please upload your compnay logo.", {
        variant: "error",
      });

    finish({
      aboutCompany,
      website,
      linkedInProfile,
      twitterProfile,
      facebookProfile,
      companyPhotos,
      companyLogo,
    });
  };

  const handleBack = () => {
    back();
  };

  const handleFileChange = (e, key) => {
    if (!e.target.files[0]) return;

    const { files } = e.target;
    const formData = new FormData();

    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });

    upload({ formData, key });
  };

  const isDisabled = () => {
    return !companyLogo || !companyPhotos.length || !aboutCompany;
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

      <form>
        <Grid container direction="column">
          <Grid item>
            <Box mt={2}>
              <Typography variant="subtitle2" className={classes.label}>
                About Company:
              </Typography>
              <TextField
                maxRows={15}
                multiline
                fullWidth
                aria-label="aboutCompany"
                value={aboutCompany}
                onChange={({ target }) => _setAboutCompany(target.value)}
              />
            </Box>
          </Grid>

          <Grid item>
            <Box mt={2}>
              <Typography variant="subtitle2" className={classes.label}>
                Company Logo:
              </Typography>
              <div className={classes.fileDropZone}>
                <input
                  className={classes.fileInputControl}
                  onChange={(e) => handleFileChange(e, "companyLogo")}
                  type="file"
                  accept="image/jpeg, image/png"
                />
                {companyLogo_Status === true && (
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
                Company Photos:
              </Typography>
              <div className={classes.fileDropZone}>
                <input
                  className={classes.fileInputControl}
                  multiple
                  onChange={(e) => handleFileChange(e, "companyPhotos")}
                  type="file"
                  accept="image/jpeg, image/png"
                />
                {companyPhotos_Status === true && (
                  <div className={classes.loadingOverlay}>
                    <CircularProgress />
                  </div>
                )}
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box mt={2}>
              <Typography variant="subtitle2" className={classes.label}>
                Compnay Website:
              </Typography>
              <TextField
                fullWidth
                required
                type="text"
                size="medium"
                variant="outlined"
                value={website}
                onChange={({ target }) => _setWebsite(target.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
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

          <Grid item xs={12} md={8}>
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

          <Grid item xs={12} md={8}>
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
                onClick={handleFinish}
                endIcon={<ArrowForwardIcon />}
                variant="outlined"
                color="primary"
                disabled={isDisabled()}
              >
                {isSaving === true && <CircularProgress color="white" />}
                Finish
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  companyLogo_Status: state.upload.companyLogo_Status,
  companyPhotos_Status: state.upload.companyPhotos_Status,
  companyLogo_Msg: state.upload.companyLogo_Msg,
  companyPhotos_Msg: state.upload.companyPhotos_Msg,
});
const mapDispatchToProps = (dispatch) => ({
  upload(payload) {
    dispatch(upload(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Step2));
