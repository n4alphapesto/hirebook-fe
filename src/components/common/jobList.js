import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Typography,
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { removeJob } from "../../ducks/jobs";

const useStyles = makeStyles((theme) => ({
  viewButton: {
    backgroundColor: "#02bfa0",
    color: "#fff",
    textAlign: "center",
    padding: theme.spacing(1),
    borderRadius: "10%",
    "&:hover": {
      backgroundColor: "#029a82",
    },
  },

  root: {
    display: "flex",
    marginBottom: 10,
    height: 150,
  },
  details: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    flex: "1 1 auto",
  },
  cover: {
    minWidth: 151,
  },
}));

const Jobs = ({ isRemovingJob, jobsData, userDetails, removeJobAction }) => {
  const classes = useStyles();
  const history = useHistory();
  const [removingJobId, _setRemovingJobId] = useState(null);
  const userType = userDetails.userType;

  const viewJobData = (job) => {
    if (userType === "JOBSEEKER") history.push(`/jobseeker/jobs/${job.id}`);
    else history.push(`/recruiter/postedjobs/${job.id}`);
  };

  const removeJob = (jobId) => {
    _setRemovingJobId(jobId);
    removeJobAction({ jobId });
  };

  useEffect(() => {
    if (!isRemovingJob || (isRemovingJob == "done" && removingJobId))
      _setRemovingJobId(null);
  }, [isRemovingJob]);

  return (
    <>
      {jobsData &&
        jobsData.map((job) => (
          <Card className={classes.root} key={job.id}>
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
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      Job available in {job?.locations?.join(", ")}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      Posted on: ${new Date(job.createdAt).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                      {job.description.slice(0, 125)}
                      {job.description.length > 125 && "..."}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3} alignItems="center">
                  <Box align="center">
                    <Button
                      variant="contained"
                      className={classes.viewButton}
                      onClick={() => viewJobData(job)}
                    >
                      View Job
                    </Button>
                    {userType === "RECRUITER" ? (
                      <Button
                        variant="link"
                        onClick={() => removeJob(job.id)}
                        color="primary"
                        disabled={isRemovingJob}
                      >
                        {isRemovingJob && removingJobId === job.id && (
                          <CircularProgress color="white" size={20} />
                        )}
                        Delete Job
                      </Button>
                    ) : (
                      <Button
                        variant="link"
                        onClick={() => removeJob()}
                        color="primary"
                      >
                        Not Interested
                      </Button>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
    </>
  );
};

const mapStatToProps = (state) => ({
  userDetails: state.user.userDetails,
  isRemovingJob: state.jobs.isRemovingJob,
});
const mapDispatchToProps = (dispatch) => ({
  removeJobAction(payload) {
    removeJob(payload);
  },
});

export default connect(mapStatToProps, mapDispatchToProps)(Jobs);
