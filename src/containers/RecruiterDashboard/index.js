import React, { useState, useEffect } from "react";
import {
  Link,
  Box,
  Typography,
  Button,
  Grid,
  makeStyles,
  TablePagination,
} from "@material-ui/core";
import { connect } from "react-redux";

import { StatsComponent, JobList } from "../../components/common";

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
  userDetails,
  jobsFetching,
  recruitStats,
  isJobPosting,
  totalJobs,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, _setPage] = useState(0);

  useEffect(() => {
    const payload = {
      postedBy: userDetails._id,
      limit: rowsPerPage,
      skip: page * rowsPerPage,
    };
    getJobs(payload);
  }, [rowsPerPage, page]);

  const handleChangePage = (event, newPage) => {
    _setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    _setPage(0);
  };

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
            <JobList jobsData={jobList} />
          </Grid>
          <Grid item xs={12}>
            <Box align="right">
              <TablePagination
                component="div"
                count={totalJobs}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobList: state.jobs.jobList,
  jobsFetching: state.jobs.jobsFetching,
  totalJobs: state.jobs.totalJobs,
  recruitStats: state.jobs.recruitStats,
  isJobPosting: state.jobs.isJobPosting,
  userDetails: state.user.userDetails,
});
const mapDispatchToProps = (dispatch) => ({
  getJobs(payload) {
    dispatch(getJobs(payload));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(RecruiterDashboard));
