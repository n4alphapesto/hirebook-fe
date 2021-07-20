import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Link,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  Avatar,
  Box,
  Typography,
  TextareaAutosize,
  makeStyles,
} from "@material-ui/core";

import { PopUpComponent, Emailer } from "../../common";
//import recruiterData from "./recruiterData";

import {
  jobs,
  jobApplicantsForPost,
  candidateStatus,
  users,
  ashwekPawar,
  recruiter,
  allCities,
} from "./recruiterData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: "1000px",
    height: "80%",
  },
  title: {
    fontWeight: "900",
  },
  skill: {
    backgroundColor: "#EDEDED",
    borderRadius: "6px",
    margin: theme.spacing(2),
  },
  bold: {
    fontWeight: "900",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(2),
  },
  viewButton: {
    backgroundColor: "#02bfa0",
    color: "#fff",
    textAlign: "center",
    padding: theme.spacing(1),
    margin: theme.spacing(4),
    borderRadius: "10%",
    "&:hover": {
      backgroundColor: "#029a82",
    },
  },
  rejectButton: {
    backgroundColor: "red",
    color: "#fff",
    textAlign: "center",
    padding: theme.spacing(1),
    margin: theme.spacing(4),
    borderRadius: "10%",
  },
  emailMessage: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
}));

const JobseekerDetails = () => {
  const classes = useStyles();
  //const params = useParams();
  const [openRegretEmail, setOpenRegretEmail] = useState(false);
  const [openHireEmail, setOpenHireEmail] = useState(false);
  const params = "60f54f033805e048dc3c8335";

  const user = users.filter((user) => user.jobseeker._id === params)[0];
  console.log(user);

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} md={4}>
              <Avatar
                alt={`${user.name}`}
                src={ashwekPawar}
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h3">{user.name}</Typography>
              <Typography>
                Current Role: {user.jobseeker.currentRole}
              </Typography>
              <Typography>
                Current Location: {user.jobseeker.currentLocation}
              </Typography>
              <Typography>
                Current CTC: {user.jobseeker.currentCTC} LPA
              </Typography>
              <Typography>
                Notice Period: {user.jobseeker.noticePeriod} weeks
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item xs={12} md={12}>
              <Typography variant="h5">{user.name}'s Skills</Typography>
              <Grid container justifyCentent="left" spacing={2} direction="row">
                {user.jobseeker.skills.map((skill, i) => (
                  <Grid item key={i} className={classes.skill}>
                    {skill.title}
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h5">About {user.name}</Typography>
              <Typography variant="body2">{user.jobseeker.about}</Typography>
              <Box m={2}></Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} md={8}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => setOpenHireEmail(true)}
              >
                Hire
              </Button>
            </Grid>
            <Grid item xs={12} md={8}>
              <Button
                color="secondary"
                className={classes.button}
                onClick={() => setOpenRegretEmail(true)}
              >
                Reject
              </Button>
            </Grid>
          </Grid>
          <Emailer
            type="schedule"
            emailId=""
            open={openHireEmail}
            handleClose={() => setOpenHireEmail(false)}
          />

          <Emailer
            type="reject"
            emailId="n4alphapesto@gmail.com"
            open={openRegretEmail}
            handleClose={() => setOpenRegretEmail(false)}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default JobseekerDetails;
