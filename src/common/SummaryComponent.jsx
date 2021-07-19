import React from "react";
import {
  Button,
  Link,
  Card,
  CardContent,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import Image from "./Image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  actionSection: {
    border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const SummaryComponent = ({ cardImage, cardTitle, cardSubTitle, cardText }) => {
  const classes = useStyles();
  console.log(Boolean(cardImage));
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2} justifyContent="center">
          {Boolean(cardImage) && (
            <Grid item md={2}>
              <Image src={cardImage} width={100} height={100} />
            </Grid>
          )}

          <Grid item md={8}>
            <Typography variant="h5">{cardTitle}</Typography>
            <Typography variant="h6">{cardSubTitle}</Typography>
            <Typography>{cardText}</Typography>
          </Grid>
          <Grid item md={2} className={classes.actionSection}>
            <Button>View</Button>
            <Link>Not Interested</Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SummaryComponent;
