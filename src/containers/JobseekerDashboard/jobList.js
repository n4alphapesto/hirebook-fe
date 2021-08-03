import React from "react";
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
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

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

const Jobs = ({ jobsData, userDetails }) => {
  const classes = useStyles();
  const history = useHistory();

  const viewJobData = (job) => {
    history.push(`/jobseeker/jobs/${job.id}`);
  };

  const userType = userDetails.userType;
  return (
    <>
      {jobsData &&
        jobsData.map((job) => (
          <Card className={classes.root}>
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
                      <Button href="#text-buttons" color="primary">
                        Delete Job
                      </Button>
                    ) : (
                      <Button href="#text-buttons" color="primary">
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
});

export default connect(mapStatToProps)(Jobs);
