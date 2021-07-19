import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Link,
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  TextField,
  TextareaAutosize,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { SummaryComponent, Emailer } from "../../common";
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
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(2),
  },
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
  rejectButton: {
    textAlign: "center",
  },
  emailMessage: {
    width: "100%",
  },
}));

const JobPostDetails = () => {
  const classes = useStyles();
  //const params = useParams();
  const params = "60bcffddc9068f6473ec271f";
  const [openEmail, setOpenEmail] = useState(false);

  const jobData = jobs.filter((post) => post._id.$oid === params)[0];
  //console.log(jobData);
  let candidates = jobApplicantsForPost.filter(
    (el) => el.jobPostId === params
  )[0].candidates;
  console.log(candidates);
  candidates = candidates.map((item) => {
    //let candidateData = users.filter(user => user.jobseeker._id === item)
    let currentStatus = candidateStatus.filter(
      (el) => el._id.$oid === item.status
    )[0].title;
    let candidateData = users.filter(
      (el) => el.jobseeker._id === el.candidate
    )[0];
    console.log(candidateData);
    return { currentStatus };
  });

  console.log(candidates);
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Grid container justifyContent="left" spacing={2} direction="column">
            <Grid item xs={12} md={12}>
              <Typography variant="h3">{jobData.title}</Typography>
              <Typography variant="subtitle2">
                {recruiter.locations[0]}
              </Typography>
              <Typography variant="subtitle2">
                Number of people applied:{" "}
                <span className={classes.bold}>
                  {jobData.applicants.length}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" className={classes.title}>
                Required Skills
              </Typography>
              <Grid container justifyCentent="left" spacing={2} direction="row">
                {jobData.skills.split(",").map((skill, i) => (
                  <Grid item key={i} className={classes.skill}>
                    {skill}
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} direction="row">
              <Typography variant="subtitle2">
                Locations:{" "}
                <span className={classes.bold}>
                  {" "}
                  {jobData.locationsAt
                    .map(
                      (item) =>
                        allCities.filter((city) => city._id.$oid === item)[0]
                          .title
                    )
                    .join(", ")}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" className={classes.title}>
                Job Description
              </Typography>
              <Typography variant="body2">{jobData.description}</Typography>
            </Grid>
            <Grid item xs={12} md={12} justifyContent="center">
              <SummaryComponent
                cardTitle={"Ashwek Pawar"}
                cardSubtitle1={""}
                cardSubtitle2={""}
              >
                <Avatar
                  alt="ashwek Pawar"
                  src={ashwekPawar}
                  className={classes.avatar}
                />
                <Typography variant="h5">
                  Interview Status: <span>InProgress</span>
                </Typography>
                <Link
                  href="/recruiter/candidates/1"
                  className={classes.viewButton}
                  variant="button"
                  underline="none"
                >
                  View
                </Link>
                <Link
                  className={classes.rejectButton}
                  onClick={() => setOpenEmail(true)}
                >
                  Reject
                </Link>
              </SummaryComponent>
            </Grid>
          </Grid>
          <Emailer
            type="reject"
            emailId=""
            open={openEmail}
            handleClose={() => setOpenEmail()}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default JobPostDetails;
