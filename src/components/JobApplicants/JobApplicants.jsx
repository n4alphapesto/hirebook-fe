import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  Button,
  Box,
  CardMedia,
  Dialog,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import JobSeekerProfile from "../../containers/JobSeekerProfile";
import { Emailer } from "../common";
const useStyles = makeStyles((theme) => ({}));

const JobApplicants = ({ applicants, jobId }) => {
  const [open, setOpen] = useState(false);
  const [openEmailType, setOpenEmailType] = useState(null);
  const [jobSeekerData, _setJobSeekerData] = useState(null);
  const classes = useStyles();

  const handleClickOpen = (data) => {
    _setJobSeekerData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    _setJobSeekerData(null);
  };

  const renderActions = () => {
    switch (jobSeekerData?.status) {
      case "APPLIED":
        return (
          <>
            <Button
              autoFocus
              onClick={() => setOpenEmailType("schedule")}
              color="primary"
            >
              Schedule Interview
            </Button>
            <Button autoFocus onClick={() => {}} color="secondary">
              Not Interested
            </Button>
          </>
        );
      case "INTERVIEWING":
        return (
          <>
            <Button
              autoFocus
              onClick={() => setOpenEmailType("offer")}
              color="primary"
            >
              Send Offer Letter
            </Button>
            <Button
              autoFocus
              onClick={() => setOpenEmailType("reject")}
              color="secondary"
            >
              Send Regret Letter
            </Button>
          </>
        );
      case "HIRED":
        return (
          <Typography variant="body2" color="primary">
            You Hired This Applicant.
          </Typography>
        );
      case "REJECTED":
        return (
          <Typography variant="body2" color="secondary">
            You Rejected This Applicant.
          </Typography>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {applicants.map((applicant) => (
        <Card key={applicant._id} elevation={2} className={classes.root}>
          <CardMedia
            className={classes.cover}
            image="https://thumbs.dreamstime.com/b/software-developer-smiling-young-working-computer-54668839.jpg"
            title="Live from space album cover"
          />
          <CardContent className={classes.content}>
            <Grid container>
              <Grid item xs={9}>
                <Box>
                  <Typography component="h4" variant="h5">
                    {applicant?.candidate?.name} -{" "}
                    {applicant?.candidate?.jobseeker?.currentRole}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Email: {applicant?.candidate.email}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Applied On:
                    {new Date(applicant?.createdAt).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2">
                    {applicant?.candidate?.jobseeker?.about?.slice(0, 125)}
                    {applicant?.candidate?.jobseeker?.about?.length > 125 &&
                      "..."}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.viewButton}
                    onClick={() => handleClickOpen(applicant)}
                  >
                    View Profile
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}

      <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
        <DialogContent dividers>
          {open && jobSeekerData && jobSeekerData.candidate && (
            <JobSeekerProfile jobSeekerData={jobSeekerData.candidate} />
          )}
        </DialogContent>
        <DialogActions>{renderActions()}</DialogActions>
      </Dialog>

      <Emailer
        type={openEmailType}
        candidateId={jobSeekerData?.candidate?._id}
        jobId={jobId}
        updateId={jobSeekerData?._id}
        open={!!openEmailType}
        handleClose={() => setOpenEmailType(null)}
      />
    </>
  );
};

export default JobApplicants;
