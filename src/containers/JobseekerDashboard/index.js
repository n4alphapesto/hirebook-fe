import React, { useState, useEffect } from "react";
import {
  Link,
  Box,
  Typography,
  Grid,
  Hidden,
  Drawer,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import FilterListIcon from "@material-ui/icons/FilterList";
import { connect } from "react-redux";

import { StatsComponent, FilterComponent } from "../../components/common";
import JobList from "./jobList";

import { getAllJobs } from "../../ducks/jobs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
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

const JobseekerDashboard = ({
  getAllJobs,
  jobList,
  jobsFetching,
  jobseekerStats,
  getUserData,
  fetchingUser,
  userData,
}) => {
  const classes = useStyles();
  const [location, setLocation] = React.useState("All");
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  useEffect(() => {
    const user = userData;

    getAllJobs();
  }, []);

  return (
    <div className={classes.root}>
      <Box mt={8}>
        <Hidden mdUp>
          <Grid container justifyContent="center">
            <Grid item className={classes.list}>
              <IconButton onClick={toggleDrawer}>
                <FilterListIcon />
                <Typography>Filter</Typography>
              </IconButton>
            </Grid>
            <Grid item>
              <Drawer anchor="bottom" open={openDrawer} onClose={toggleDrawer}>
                <FilterComponent
                  title="By Location"
                  options={[
                    "All",
                    "Bangalore",
                    "Hyderabad",
                    "Gurgaon",
                    "Work From Home",
                  ]}
                  value={location}
                  handleChange={handleChange}
                />
              </Drawer>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <StatsComponent data={jobseekerStats} />
        </Hidden>

        <Grid container spacing={2} justifyContent="center">
          <Grid item md={3}>
            <Hidden mdDown>
              <FilterComponent
                title="Filter By Location"
                options={["All", "Bangalore", "Hyderabad", "Gurgaon"]}
                value={location}
                handleChange={handleChange}
              />
            </Hidden>
          </Grid>
          <Grid item md={9}>
            <JobList
              jobList={
                location === "All"
                  ? jobList
                  : jobList.filter(
                      (post) => post.locations.indexOf(location) !== -1
                    )
              }
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobList: state.jobs.jobList,
  jobsFetching: state.jobs.jobsFetching,
  jobseekerStats: state.jobs.jobseekerStats,
  fetchingUser: state.user.fetchingUser,
  userData: state.user.userDetails,
});
const mapDispatchToProps = (dispatch) => ({
  getAllJobs() {
    dispatch(getAllJobs());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(JobseekerDashboard));
