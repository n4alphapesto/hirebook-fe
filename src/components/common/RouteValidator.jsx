import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import { validateRoute } from "../../utils/helpers";
import { getUser } from "../../ducks/user";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    paddingTop: 80,
  },
}));

const RouteValidator = ({
  component: Component,
  getUserAction,
  isUserLoading,
  userDetails,
  ...rest
}) => {
  const classes = useStyles();

  useEffect(() => {
    getUserAction();
  }, []);

  if (isUserLoading === true)
    return (
      <Grid
        container
        directon="column"
        justifyContent="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item>
          <CircularProgress color="primary" />
        </Grid>
      </Grid>
    );

  const redirectUrl = validateRoute(userDetails, rest.path);
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        redirectUrl ? (
          <Redirect push to={redirectUrl} />
        ) : (
          <div className="content">
            <Component {...matchProps} />
          </div>
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.user.userDetails,
  isUserLoading: state.user.isUserLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getUserAction() {
    dispatch(getUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteValidator);
