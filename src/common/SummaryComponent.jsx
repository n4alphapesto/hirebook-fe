import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  makeStyles,
} from "@material-ui/core";
import Image from "./Image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  cardTitle: {
    color: "#40454A",
  },
  cardSubTitle1: {
    color: "#4A5056",
  },
  cardSubTitle2: {
    color: "#8A8A8A",
  },
  cardText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#4A5056",
  },
  actionSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const SummaryComponent = ({
  cardTitle,
  cardSubTitle1,
  cardSubTitle2,
  children,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={2}>
            {children[0]}
          </Grid>

          <Grid item md={8}>
            <Typography variant="h5">{cardTitle}</Typography>
            {Boolean(cardSubTitle1) && (
              <Typography variant="subtitle1">{cardSubTitle1}</Typography>
            )}
            {Boolean(cardSubTitle2) && (
              <Typography variant="subtitle2">{cardSubTitle2}</Typography>
            )}
            <Box variant="body2">{children[1]}</Box>
          </Grid>
          <Grid item md={2} className={classes.actionSection}>
            {children.slice(2, children.length)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SummaryComponent.defaultProps = {
  cardTitle: "Card Title",
  cardText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod adipisci asperiores optio dignissimos odit? Ipsam perspiciatis dignissimos, ullam aperiam modi error cum fugiat laborum voluptate dolorem quae commodi debitis officiis.",
};

export default SummaryComponent;
