import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  Link,
  Card,
  CardContent,
  Grid,
  Avatar,
  Typography,
  makeStyles,
  CardActions,
  Button,
  Box,
  Divider,
  Chip,
} from "@material-ui/core";

import { SummaryComponent, Emailer } from "../../components/common";
import { getJobApplicant, getJobById } from "../../ducks/jobs";

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

  companyLogo: {
    width: "100%",
    height: "auto",
    margin: "0 10px",
  },

  chip: {
    margin: theme.spacing(0.5),
  },
}));

const JobPostDetails = ({
  jobData,
  isJobFetching,
  getJobById,
  userDetails,
}) => {
  const [openEmail, setOpenEmail] = useState(false);
  const classes = useStyles();
  const params = useParams();
  const jobId = params.id;

  useEffect(() => {
    getJobById(params.id);
  }, []);

  console.log(" !!! jobData !!!", jobData);
  const userTypes = userDetails.userType;
  if (isJobFetching !== "done") return null;
  return (
    <div className={classes.root}>
      <Card elevation={2}>
        <CardContent>
          <Grid container spacing={2} direction="column">
            <Grid container spacing={5}>
              <Grid item xs={12} md={3}>
                <img
                  className={classes.companyLogo}
                  src="https://thumbs.dreamstime.com/b/software-developer-smiling-young-working-computer-54668839.jpg"
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="h4">{jobData.title}</Typography>
                <Typography variant="subtitle1">
                  {jobData.postedBy?.recruiter?.companyName}
                </Typography>
                <Typography variant="subtitle2">
                  Company Locations:{" "}
                  {jobData.postedBy?.recruiter?.locations.toString()}
                </Typography>
                <Typography variant="subtitle2">
                  <span
                    className={classes.bold}
                  >{` Vacancies: ${jobData.vacancies}`}</span>
                </Typography>
                <Typography variant="subtitle2">
                  <span
                    className={classes.bold}
                  >{` Number of people applied: ${jobData?.applicants?.length}`}</span>
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.title}>
                {`Required Skills`}
              </Typography>
              {jobData?.skills?.map((skill, i) => (
                <Chip
                  className={classes.chip}
                  key={skill.title}
                  label={skill.title}
                />
              ))}
              <Typography variant="h5" className={classes.title}>
                {`Job Description`}
              </Typography>
              <Typography variant="body2">{jobData.description}</Typography>
              <Typography variant="h5" className={classes.title}>
                {`About Company`}
              </Typography>
              <Typography variant="body2">
                {jobData.postedBy.recruiter.aboutCompany}
              </Typography>
              <Typography variant="h5" className={classes.title}>
                {`Quick Facts`}
              </Typography>
              <ul className={classes.list}>
                <li>
                  <Typography variant="body2">
                    Founded in {jobData.postedBy.recruiter.foundationYear}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Number Of Employees{" "}
                    {jobData.postedBy.recruiter.noOfEmployees}
                  </Typography>
                </li>
              </ul>

              <Typography variant="h5" className={classes.title}>
                {jobData.postedBy.recruiter.companyName} on web:
              </Typography>
              <Link target="_blank" href={jobData.postedBy.recruiter.website}>
                Website
              </Link>
              {jobData.postedBy.recruiter.linkedinProfile && (
                <Link
                  target="_blank"
                  href={jobData.postedBy.recruiter.linkedinProfile}
                >
                  LinkedIn
                </Link>
              )}
              {jobData.postedBy.recruiter.twitterProfile && (
                <Link
                  target="_blank"
                  href={jobData.postedBy.recruiter.twitterProfile}
                >
                  Twitter
                </Link>
              )}
              {jobData.postedBy.recruiter.facebookProfile && (
                <Link
                  target="_blank"
                  href={jobData.postedBy.recruiter.facebookProfile}
                >
                  Facebook
                </Link>
              )}
            </Grid>

            <Box mt={5}>
              <Divider />
              <CardActions className={classes.actionRow}>
                {userTypes === "JOBSEEKER" ? (
                  <>
                    <Button variant="contained" color="primary">
                      Apply
                    </Button>
                    <Button variant="contained" color="secondary">
                      Not Interested
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary">
                      Remove Job
                    </Button>
                  </>
                )}
              </CardActions>
            </Box>
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
const mapStateToProps = (state) => ({
  isJobApplicantFetching: state.jobs.isJobApplicantFetching,
  jobApplicants: state.jobs.jobApplicants,
  jobData: state.jobs.selectdJobDetails,
  isJobFetching: state.jobs.isFetchingSelectedJob,
  userDetails: state.user.userDetails,
});
const mapDispatchToProps = (dispatch) => ({
  getJobApplicant(payload) {
    dispatch(getJobApplicant(payload));
  },
  getJobById(payload) {
    dispatch(getJobById(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(JobPostDetails);
