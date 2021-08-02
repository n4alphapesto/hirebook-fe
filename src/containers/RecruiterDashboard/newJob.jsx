import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
  InputAdornment,
  TextareaAutosize,
  Snackbar,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";
import CloseIcon from "@material-ui/icons/Close";

import {
  allCities,
  allSkills,
  FRESHER,
  INTERMEDIATE,
  EXPERIENCED,
  recruiter,
} from "./recruiterData";
import { useHistory } from "react-router-dom";
import { addJob } from "../../ducks/jobs";

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
    //border: "2px solid blue",
    "& > *": {
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "center",
      padding: theme.spacing(2),
      width: "80%",
      //border: "2px solid red",
    },
  },
  inputs: {
    margin: theme.spacing(2),
  },
  description: {
    width: "100%",
  },
  cost: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    width: "100%",
  },
}));

const JobPostForm = ({ isPosting, createNewJobPost }) => {
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = useState({});
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [title, setTitle] = useState("");
  const [locations, setLocations] = useState([{ title: "" }]);
  const [vacancies, setVacancies] = useState(1);
  const [skills, setSkills] = useState([
    { title: "", expertiseLevel: FRESHER },
  ]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isPosting === "done") {
      history.push("/recruiter");
    }
  }, [isPosting]);

  const handleCloseNotification = () => {
    setOpenNotification(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date();
    const newPost = {
      isDeleted: false,
      title,
      locations, // new one
      vacancies, // new one
      skills,
      description,
      date: today,
      status: "Active",
      createdAt: today,
      updatedAt: today,
      applicants: [],
      postedBy: user._id,
    };
    console.log(newPost);
    createNewJobPost(newPost);
  };

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Box mb={5} align="center">
            <Typography variant="h4" className="skill_form_titile">
              Create A New Job Post
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid
              container
              justifyContent="left"
              spacing={2}
              direction="column"
            >
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2">Job Title:</Typography>
                <TextField
                  autoFocus
                  fullWidth
                  required
                  variant="outlined"
                  onChange={({ target }) => setTitle(target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2">Vacancies:</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder={`${vacancies}`}
                  onChange={({ target }) => setVacancies(Number(target.value))}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" className={classes.label}>
                  Required Skills
                </Typography>
                <Autocomplete
                  required
                  multiple
                  options={allSkills}
                  getOptionLabel={(option) => option.title}
                  //defaultValue={recruiter.locations[0]}
                  onChange={({ target }, newValue) => {
                    //console.log(target.value, newValue);
                    setSkills(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      //placeholder={`Eg. ${recruiter.locations[0]}`}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2">Job Locations:</Typography>
                <Autocomplete
                  required
                  multiple
                  options={allCities}
                  getOptionLabel={(option) => option.title}
                  //defaultValue={recruiter.locations[0]}
                  onChange={({ target }, newValue) =>
                    setLocations(newValue.map((loc) => loc.title))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      //placeholder={`Eg. ${recruiter.locations[0]}`}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography variant="subtitle2" className={classes.label}>
                  Job Description:
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={15}
                  fullWidth
                  required
                  label="details of job"
                  placeholder={
                    "Job details, description, requirements, responsibilities"
                  }
                  className={classes.description}
                  onChange={({ target }) => setDescription(target.value)}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} md={8}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isPosting === true}
                  className={classes.button}
                >
                  {isPosting === true && (
                    <CircularProgress size={20} color="white" />
                  )}
                  Create
                </Button>
              </Grid>
              <Grid item xs={12} md={8}>
                <Button
                  color="secondary"
                  className={classes.button}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/recruiter";
                  }}
                  disabled={isPosting === true}
                >
                  {isPosting === true && (
                    <CircularProgress size={20} color="white" />
                  )}
                  Discard
                  <CloseIcon />
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isPosting: state.jobs.isJobPosting,
});

const mapDispatchToProps = (dispatch) => ({
  createNewJobPost(payload) {
    dispatch(addJob(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(JobPostForm);
