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
import { getJobByIdApi } from "../../api/common";

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
  const params = useParams();
  const jobId = params.id;
  //const jobId = "60f7995ae502ee11b6eeb3fc";
  //console.log(jobId);
  const [jobData, setJobData] = useState({
    _id: "",
    locations: [],
    isDeleted: null,
    title: "",
    description: "",
    skills: [],
    vacancies: 0,
    postedBy: "",
    applicants: [],
    createdAt: "",
    updatedAt: "",
  });
  const [openEmail, setOpenEmail] = useState(false);

  useEffect(() => {
    getJobByIdApi({ id: jobId }).then((res) => {
      const data = res.data;
      console.log(data);
      ///setJobData(data);
    });
  }, [jobId]);

  //console.log(jobData);
  /*let candidates = jobApplicantsForPost.filter(
    (el) => el.jobPostId === jobId
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

  console.log(candidates);*/
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          {jobId}
          {JSON.stringify(jobData)}
          <Grid container justifyContent="left" spacing={2} direction="column">
            <Grid item xs={12} md={12}>
              <Typography variant="h3">{jobData.title}</Typography>
              <Typography variant="subtitle2">
                {recruiter.locations[0]}
              </Typography>
              <Typography variant="subtitle2">
                Vacancies:
                <span className={classes.bold}>{jobData.vacancies}</span>
              </Typography>
              <Typography variant="subtitle2">
                Number of people applied: <span className={classes.bold}></span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" className={classes.title}>
                Required Skills
              </Typography>
              <Grid container justifyCentent="left" spacing={2} direction="row">
                {/*jobData.skills.map((skill, i) => (
                  <Grid item key={i} className={classes.skill}>
                    {skill.title}
                  </Grid>
                ))*/}
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} direction="row">
              <Typography variant="subtitle2">
                Locations:{" "}
                <span className={classes.bold}>
                  {/*jobData.locations.join(", ")*/}
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
