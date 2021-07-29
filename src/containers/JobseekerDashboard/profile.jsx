import { React, useState, useEffect } from "react";
import {
  Link,
  Box,
  Typography,
  TextField,
  InputBase,
  ImageList,
  ImageListItem,
  IconButton,
  InputAdornment,
  TextareaAutosize,
  Grid,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: "1000px",
    height: "80%",
    //border: "2px solid blue",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  companyDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  companyName: { margin: "10px" },
  socialLinks: { margin: "10px", textAlign: "left" },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    //marginBottom: theme.spacing(1),
    fontWeight: "900",
  },
  editIcon: {
    //border: "2px solid black",
    //borderRadius: "50%",
    height: theme.spacing(4),
  },
  about: {
    width: "100%",
  },
  companyPhotos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    border: "2px solid red",
    width: "100%",
  },
}));

const JobseekerProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <h1>Jobseeker Profile</h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobseekerProfile;
