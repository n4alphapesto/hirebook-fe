import React from "react";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
  CardMedia,
  Divider,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    minHeight: 240,
  },
  divider: {
    margin: "10px 0 20px",
  },
});

const JobSeekerProfile = ({ userDetails }) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                className={classes.media}
                image={
                  "https://thumbs.dreamstime.com/b/software-developer-smiling-young-working-computer-54668839.jpg"
                }
                title="Contemplative Reptile"
              />
              <Divider variant="middle" className={classes.divider} />
              <CardContent>
                <Typography variant="h5">{userDetails.name}</Typography>
                <Typography variant="body1">
                  {userDetails.jobseeker.currentRole}
                </Typography>
                <Typography variant="body2">
                  {userDetails.jobseeker.currentLocation}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Card>
              <CardContent>
                <Typography variant="h4">About</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitile">
                  {userDetails.jobseeker.about}
                </Typography>

                <Typography variant="h4">Skills</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitile">
                  {userDetails.jobseeker.skills.map((skill) => (
                    <Chip label={skill.title} />
                  ))}
                </Typography>

                <Typography variant="h4">Resume</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitile">Resumes</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.user.userDetails,
});

export default connect(mapStateToProps)(JobSeekerProfile);
