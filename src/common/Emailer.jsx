import { React, useState } from "react";
import PopUpComponent from "./PopUpComponent";
import {
  Typography,
  Grid,
  TextField,
  TextareaAutosize,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  viewButton: {
    backgroundColor: "#02bfa0",
    color: "#fff",
    textAlign: "center",
    padding: theme.spacing(1),
    margin: theme.spacing(4),
    borderRadius: "10%",
    "&:hover": {
      backgroundColor: "#029a82",
    },
  },
  rejectButton: {
    backgroundColor: "red",
    color: "#fff",
    textAlign: "center",
    padding: theme.spacing(1),
    margin: theme.spacing(4),
    borderRadius: "10%",
  },
  emailMessage: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
}));

const Emailer = ({ type, emailId, open, handleClose }) => {
  const classes = useStyles();
  let text;
  if (type === "reject") {
    text = "Regret Letter";
  } else if (type === "schedule") {
    text = "Schedule Interview";
  } else if (type === "hire") {
    text = "Offer Letter";
  }

  return (
    <div>
      <PopUpComponent open={open} handleClose={handleClose}>
        <Typography variant="h3">{text}</Typography>
        <Grid container justifyContent="left" spacing={2} direction="column">
          <Grid item xs={12} md={12}>
            {type === "schedule" ? (
              <>
                <Typography variant="subtitle2">Date:</Typography>
                <TextField
                  fullWidth
                  label="Interview Date"
                  type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </>
            ) : (
              <>
                <Typography variant="subtitle2">Email:</Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  value={emailId}
                />
              </>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid item xs={12} md={12}>
              {type === "schedule" ? (
                <>
                  <Typography variant="subtitle2">Time:</Typography>
                  <TextField
                    fullWidth
                    label="Interview Time"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </>
              ) : (
                <>
                  <Typography variant="subtitle2">Subject:</Typography>
                  <TextField fullWidth required variant="outlined" />
                </>
              )}
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="subtitle2">Message:</Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={15}
              fullWidth
              required
              label="details of job"
              placeholder={""}
              className={classes.emailMessage}
            />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={12} md={6}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button color="secondary" className={classes.button}>
              Discard
            </Button>
          </Grid>
        </Grid>
      </PopUpComponent>
    </div>
  );
};

export default Emailer;
