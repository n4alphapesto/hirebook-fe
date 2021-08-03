import React, { useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
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
  const [data, _setData] = useState({
    date: moment().add("1", "day").toDate(),
    time: moment().toDate(),
    message: "",
  });
  const classes = useStyles();
  let text;
  if (type === "reject") {
    text = "Regret Letter";
  } else if (type === "schedule") {
    text = "Schedule Interview";
  } else if (type === "offer") {
    text = "Offer Letter";
  }

  return (
    <div>
      <PopUpComponent open={open} handleClose={handleClose}>
        <Typography variant="h3">{text}</Typography>
        <Grid container justifyContent="left" spacing={2} direction="column">
          <Grid item xs={12} md={12}>
            {type === "schedule" && (
              <>
                <Typography variant="subtitle2">Date:</Typography>
                <TextField
                  fullWidth
                  type="date"
                  value={data.date}
                  onChange={({ target }) => console.log("!!! ", target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Typography variant="subtitle2">Time:</Typography>
                <TextField
                  fullWidth
                  type="time"
                  value={data.time}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </>
            )}
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
            <Button
              color="secondary"
              onClick={handleClose}
              className={classes.button}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </PopUpComponent>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSchedulingInterview: state.jobs.isSchedulingInterview,
  isSendingOffer: state.jobs.isSendingOffer,
  isSendingRegret: state.jobs.isSendingRegret,
});

const mapDispatchToProps = (dispatch) => ({
  scheduleInterView() {
    dispatch();
  },
  sendOffer() {
    dispatch();
  },
  sendRegret() {
    dispatch();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Emailer);
