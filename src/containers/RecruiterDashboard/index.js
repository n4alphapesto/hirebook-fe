import React, { useState, useEffect } from "react";
import {
  Link,
  Box,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { connect } from "react-redux";

import {
  StatsComponent,
  SummaryComponent
} from "../../components/common";
//import JobPostForm from "./RecruiterJobPostForm";

import { getJobs } from '../../ducks/jobs'



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
  createPostButton: {
    background: "#79d4fd",
    margin: theme.spacing(2),
    "&:hover": {
      background: "#79a2fe",
    },
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
  removePostLink: {
    textAlign: "center",
  },
}));

const RecruiterDashboard = ({ getJobs, jobList, jobsFetching, recruitStats, isJobPosting }) => {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    getJobs();
  }, []);

  const deletePost = (id) => {

  };
  const handleCloseForm = () => setOpenForm(false);

  // const addNewPost = (newPost) => {
  //   //newPost.id = posts.length + 1;
  //   //setPosts((posts) => {
  //   //  return [...posts, newPost];
  //   //});
  //   handleCloseForm();
  // };

  return (
    <div className={classes.root}>
      <Box mt={8}>
        <StatsComponent data={recruitStats} />
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={9}>
            <Link
              className={classes.createPostButton}
              variant="button"
              //onClick={handleOpenForm}
              href="/recruiter/createNewPost"
            >
              Create New Job Post
            </Link>

            {jobList && jobList.map((post) => {
              return (
                <SummaryComponent
                  key={post.id}
                  cardTitle={post.title}
                  cardSubTitle1={
                    <Typography>Vacancies: {post.vacancies}</Typography>
                  }
                  cardSubTitle2={`Posted on: ${new Date(
                    post.createdAt
                  ).toLocaleDateString()}`}
                >
                  <img src="" alt="" />
                  <Typography>{post.description}</Typography>
                  <Link
                    className={classes.viewButton}
                    variant="button"
                    href={`/recruiter/postedjobs/${post.id}`}
                    underline="none"
                  >
                    View
                  </Link>
                  <Link className={classes.removePostLink} variant="inherit">
                    Remove Post
                  </Link>
                </SummaryComponent>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};


const mapStateToProps = state => ({
  jobList: state.jobs.jobList,
  jobsFetching: state.jobs.jobsFetching,
  recruitStats: state.jobs.recruitStats,
  isJobPosting: state.jobs.isJobPosting
});
const mapDispatchToProps = dispatch => ({
  getJobs() {
    dispatch(getJobs());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(RecruiterDashboard));