import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
  },

  count: {
    fontWeight: "bold",
  },

  title: {
    textTransform: "uppercase",
  },
}));

const StatsComponent = ({ data }) => {
  const classes = useStyles();
  //const { applied, saved, viewed, invitations } = data;
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      className={classes.root}
    >
      {data.map((item, i) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card elevation={2}>
              <CardContent>
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.count}
                >
                  {item.value}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  className={classes.title}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default React.memo(StatsComponent);
