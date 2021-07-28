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
  IconButton,
  makeStyles,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const editProfile = () =>
    history.push(`/${userDetails.userType.toLowerCase()}/editprofile`);

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
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5">{userDetails.name}</Typography>
                    <Typography variant="body1">
                      {userDetails.jobseeker.currentRole}
                    </Typography>
                    <Typography variant="body2">
                      {userDetails.jobseeker.currentLocation}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton onClick={editProfile} aria-label="edit-profile">
                      <EditIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Card>
              <CardContent>
                <Box mb={5}>
                  <Typography variant="h4">About</Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="subtitile">
                    {userDetails.jobseeker.about}
                  </Typography>
                </Box>

                <Box mb={5}>
                  <Typography variant="h4">Skills</Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="subtitile">
                    {userDetails.jobseeker.skills.map((skill) => (
                      <Chip label={skill.title} />
                    ))}
                  </Typography>
                </Box>

                <Box mb={5}>
                  <Typography variant="h4">Resume</Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="subtitile">Resumes</Typography>
                </Box>
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
