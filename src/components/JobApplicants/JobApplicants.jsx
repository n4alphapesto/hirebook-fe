import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  Button,
  Box,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const JobApplicants = ({ applicants }) => {
  console.log(" applicants ", applicants);
  const classes = useStyles();
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
              <Grid item xs={3} alignItems="center">
                <Box align="center">
                  <Button
                    variant="contained"
                    className={classes.viewButton}
                    onClick={() => {}}
                  >
                    View Profile
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default JobApplicants;
