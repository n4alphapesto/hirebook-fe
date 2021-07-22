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
} from "@material-ui/core";

import { SummaryComponent, Emailer } from "../../components/common";
import { getJobApplicant } from '../../ducks/jobs'
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

const JobPostDetails = ({ jobData, isFetching, getJobApplicant }) => {
  const classes = useStyles();
  const params = useParams();
  const jobId = params.id;
  const [openEmail, setOpenEmail] = useState(false);

  useEffect(() => {
    getJobApplicant(jobId);
  }, []);

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Grid container justifyContent="left" spacing={2} direction="column">
            <Grid item xs={12} md={12}>
              <Typography variant="h3">{jobData.title}</Typography>
              <Typography variant="subtitle2">
                {jobData?.locations?.join(',  ')}
              </Typography>
              <Typography variant="subtitle2">
                <span className={classes.bold}>{` Vacancies: ${jobData.vacancies}`}</span>
              </Typography>
              <Typography variant="subtitle2">
                <span className={classes.bold}>{` Number of people applied: ${jobData?.applicants?.length}`}</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" className={classes.title}>
                {`Required Skills`}
              </Typography>
              <Grid container justifyCentent="left" spacing={2} direction="row">
                {jobData?.skills?.map((skill, i) => (
                  <Grid item key={i} className={classes.skill}>
                    {`${skill.title} : ${skill.expertiseLevel}`}
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" className={classes.title}>
                {`Job Description`}
              </Typography>
              <Typography variant="body2">{jobData.description}</Typography>
            </Grid>
            <Grid item xs={12} md={12} >
              {jobData?.applicants?.length === 0 && 'No Applicants applied for this job.'}
              {jobData?.applicants?.map(applicant => {
                return <SummaryComponent
                  cardTitle={applicant.name}
                  cardSubtitle1={""}
                  cardSubtitle2={""}
                  key={applicant.name}
                >
                  <Avatar
                    alt={applicant.name}
                    src={applicant.img}
                    className={classes.avatar}
                  />
                  <Typography variant="h5">
                    Interview Status: <span>{applicant.status}</span>
                  </Typography>
                  <Link
                    href={`/recruiter/candidates/${applicant?.candidate?._id}`}
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
              })}

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
const mapStateToProps = state => ({
  jobData: state.jobs.crJobApplicant,
  isFetching: state.jobs.isjobApFetching
});
const mapDispatchToProps = dispatch => ({
  getJobApplicant(payload) {
    dispatch(getJobApplicant(payload));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(JobPostDetails);
