import React, { useState, useEffect } from "react";
import {
  Link,
  Box,
  Typography,
  Button,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { connect } from "react-redux";

import { StatsComponent } from "../../components/common";
import JobList from "./jobList";

import { getJobs } from "../../ducks/jobs";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: "1000px",
    height: "80%",
  },
  list: {
    display: "flex",
    flexDirection: "row",
  },
  listItems: {
    color: "#4A5056",
    background: "#EDEDED",
    textAlign: "center",
    margin: theme.spacing(2),
  },
}));

const RecruiterDashboard = ({
  getJobs,
  jobList,
  jobsFetching,
  recruitStats,
  isJobPosting,
}) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    getJobs();
  }, []);

  const redirect = () => history.push("/recruiter/createNewPost");

  return (
    <div className={classes.root}>
      <Box mt={8}>
        <StatsComponent data={recruitStats} />
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={9}>
            <Box align="right">
              <Button variant="outlined" onClick={redirect}>
                Create New Job Post
              </Button>
            </Box>
            <JobList jobList={jobList} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobList: state.jobs.jobList,
  jobsFetching: state.jobs.jobsFetching,
  recruitStats: state.jobs.recruitStats,
  isJobPosting: state.jobs.isJobPosting,
});
const mapDispatchToProps = (dispatch) => ({
  getJobs() {
    dispatch(getJobs());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(RecruiterDashboard));
