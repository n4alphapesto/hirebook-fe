import { React, useState, useEffect } from "react";
import {
  Button,
  Link,
  Box,
  List,
  ListItemText,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";

import {
  StatsComponent,
  SummaryComponent,
  Navbar,
  Footer,
  PopUpComponent,
} from "../../common";
import JobPostForm from "./RecruiterJobPostForm";
//import recruiterData from "./recruiterData";

import { getUserApi, getJobApi, removeJobApi } from "../../api/common";
import { getUser } from "../../redux/actions/user";
import { getJobList } from "../../redux/actions/jobList";

const defaultStats = [
  {
    title: "Jobs Posted",
    value: 0,
  },
  {
    title: "Vacancies",
    value: 0,
  },
  {
    title: "In Progress",
    value: 0,
  },
];

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

const RecruiterDashboard = () => {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);
  //const [posts, setPosts] = useState(recruiterData.posts);
  const [stats, setStats] = useState(defaultStats);

  const [userId, setUserId] = useState("");
  const [jobPosts, setJobPosts] = useState([
    {
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
    },
  ]);

  useEffect(() => {
    getUserApi().then((res) => setUserId(res.data.data._id));
  }, [userId]);

  useEffect(() => {
    getJobApi({ postedBy: userId }).then((res) => {
      let data = res.data.data.jobs;
      console.log(data);
      //data = data.filter((post) => post.isDeleted === false);
      setJobPosts(data);
    });
  }, [userId]);

  const deletePost = (id) => {
    /*getJobByIdApi({ id }).then((res) => {
      const data = res?.data?.data;
      const newData = {
        ...data,
        isDeleted: true,
      };
      removeJobApi(newData);
    });*/
  };

  useEffect(() => {
    let totalPosts = jobPosts.length;
    let vacancies = jobPosts
      .map((post) => post.vacancies)
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    let inProgress = 0;
    setStats([
      {
        title: "Jobs Posted",
        value: totalPosts,
      },
      {
        title: "Vacancies",
        value: vacancies,
      },
      {
        title: "In Progress",
        value: inProgress,
      },
    ]);
  }, [jobPosts]);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  const addNewPost = (newPost) => {
    //newPost.id = posts.length + 1;
    //setPosts((posts) => {
    //  return [...posts, newPost];
    //});
    handleCloseForm();
  };

  return (
    <div className={classes.root}>
      <Box mt={8}>
        <StatsComponent data={stats} />
        {/*JSON.stringify(userId)*/}
        {/*JSON.stringify(jobPosts)*/}
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

            {jobPosts.map((post) => {
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

export default RecruiterDashboard;

/*useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/getUser", {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => data.data)
      .then((data) => {
        setUser(JSON.stringify(data));
      });
  }, [user]);*/

/*useEffect(() => {
    getJobListApi()
      .then((res) => res.json())
      .then((data) => data.data)
      .then((data) => setJobs(data));
  }, [jobs]);*/

/*const getTotal = (posts, key) => {
    return posts.reduce((acc, post) => {
      acc = acc + post[key];
      return acc;
    }, 0);
  };*/

/*<PopUpComponent open={openForm} handleClose={handleCloseForm}>
              <JobPostForm
                submitForm={addNewPost}
                cancelForm={handleCloseForm}
              />
  </PopUpComponent>*/

/*useEffect(() => {
    getJobApi().then((res) => {
      const data = res.data.data.filter(
        (postObj) => postObj.postedBy === user && postObj.isDeleted === false
      );
      setJobPosts(data);
    });

    getJobApi({ postedBy: user }).then((res) => {
      const data = res?.data?.data;
      setJobPosts(data);
    });
  }, [jobPosts, user]);*/
