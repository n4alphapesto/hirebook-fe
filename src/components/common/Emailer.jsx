import React, { useEffect, useState } from "react";
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
  CircularProgress,
} from "@material-ui/core";
import { scheduleInterView, sendOffer, sendRegret } from "../../ducks/jobs";

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

const Emailer = ({
  type,
  candidateId,
  open,
  jobId,
  handleClose,
  scheduleInterView,
  sendOffer,
  sendRegret,
  updateId,
  isSchedulingInterview,
  isSendingOffer,
  isSendingRegret,
}) => {
  const [data, _setData] = useState({
    date: moment().add("1", "day").format("yyyy-MM-DDTHH:mm"),
    message: "",
  });
  const classes = useStyles();

  useEffect(() => {
    if (
      isSchedulingInterview === "done" ||
      isSendingOffer === "done" ||
      isSendingRegret === "done"
    ) {
      handleClose(null);
    }
  }, [isSchedulingInterview, isSendingOffer, isSendingRegret]);

  const submit = (e) => {
    let payload = {};

    switch (type) {
      case "schedule":
        payload = {
          api: {
            jobId,
            candidateId,
            interviewDateTime: data.date,
            message: data.message,
          },
          updateId,
        };

        console.log("--- schedule  payload ---", payload);
        return scheduleInterView(payload);
      case "offer":
        payload = {
          api: {
            jobId,
            candidateId,
            message: data.message,
          },
          updateId,
        };

        return console.log("--- offer payload ---", payload);
        return sendOffer(payload);
      case "regret":
        payload = {
          api: {
            jobId,
            candidateId,
            message: data.message,
          },
          updateId,
        };

        return console.log("--- regret  payload ---", payload);
        return sendRegret(payload);

      default:
        break;
    }
  };

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
                  type="datetime-local"
                  value={data.date}
                  onChange={({ target }) =>
                    _setData({ ...data, date: target.value })
                  }
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
              value={data.message}
              onChange={({ target }) =>
                _setData({ ...data, message: target.value })
              }
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
              onClick={submit}
              disabled={
                isSchedulingInterview === true ||
                isSendingRegret === true ||
                isSendingOffer === true
              }
            >
              {(isSchedulingInterview === true ||
                isSendingRegret === true ||
                isSendingOffer === true) && (
                <CircularProgress color="white" size={20} />
              )}
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
  scheduleInterView(payload) {
    dispatch(scheduleInterView(payload));
  },
  sendOffer(payload) {
    dispatch(sendOffer(payload));
  },
  sendRegret(payload) {
    dispatch(sendRegret(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Emailer);
