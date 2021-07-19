import { React, useState, useEffect } from "react";
import {
  Button,
  Link,
  Box,
  List,
  ListItemText,
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

const defaultStats = [
  {
    title: "Jobs Posted",
    value: 0,
  },
  /*{
    title: "Vacancies",
    value: 0,
  },*/
  {
    title: "Hired",
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
    marginTop: theme.spacing(10),
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

  const getTotal = (posts, key) => {
    return posts.reduce((acc, post) => {
      acc = acc + post[key];
      return acc;
    }, 0);
  };

  /*const deletePost = (id) => {
    setPosts((posts) => {
      return posts.filter((post) => post.id !== id);
    });
  };*/

  /*useEffect(() => {
    //let totalPosts = posts.length;
    //let vacancies = getTotal(posts, "vacancies");
    //let hired = getTotal(posts, "hired");
    //let inProgress = getTotal(posts, "inProgress");
    /*setStats([
      {
        title: "Jobs Posted",
        value: totalPosts,
      },
      {
        title: "Vacancies",
        value: vacancies,
      },
      {
        title: "Hired",
        value: hired,
      },
      {
        title: "In Progress",
        value: inProgress,
      },
    ]);
  }, [posts]);*/

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
        <StatsComponent data={defaultStats} />

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
            {/*<PopUpComponent open={openForm} handleClose={handleCloseForm}>
              <JobPostForm
                submitForm={addNewPost}
                cancelForm={handleCloseForm}
              />
  </PopUpComponent>*/}
            {/*posts.map((post) => {
              return (
                <SummaryComponent
                  key={post.id}
                  cardTitle={post.role}
                  cardSubTitle1={post.location}
                  cardSubTitle2={`Posted on: ${post.datePosted}`}
                >
                  <List className={classes.list}>
                    <ListItemText
                      className={classes.listItems}
                    >{`Vacancies: ${post.vacancies}`}</ListItemText>
                    <ListItemText
                      className={classes.listItems}
                    >{`Applied: ${post.applied}`}</ListItemText>
                    <ListItemText
                      className={classes.listItems}
                    >{`Hired: ${post.hired}`}</ListItemText>
                    <ListItemText
                      className={classes.listItems}
                    >{`Rejected: ${post.rejected}`}</ListItemText>
                    <ListItemText
                      className={classes.listItems}
                    >{`In Progress: ${post.inProgress}`}</ListItemText>
                  </List>
                  <Link
                    className={classes.viewButton}
                    variant="button"
                    href={`/recruiter/${post.id}`}
                    underline="none"
                  >
                    View
                  </Link>
                  <Link
                    className={classes.removePostLink}
                    variant="inherit"
                    onClick={() => deletePost(post.id)}
                  >
                    Remove Post
                  </Link>
                </SummaryComponent>
              );
            })*/}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RecruiterDashboard;
