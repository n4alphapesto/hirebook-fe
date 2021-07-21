import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";
import { getUser } from "../redux/actions/user";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import { validateRoute } from "../utils/helpers";

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
  user,
  ...rest
}) => {
  const classes = useStyles();

  useEffect(() => {
    getUserAction();
  }, []);

  console.log(" --- isUserLoading  --- ", isUserLoading, user);

  if (isUserLoading)
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

  // const redirectUrl = null;
  const redirectUrl = validateRoute(user, rest.location.pathname);

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
  isUserLoading: state.userReducer.isUserLoading,
  user: state.userReducer.user,
});

const mapDispatchoProps = (dispatch) => ({
  getUserAction: bindActionCreators(getUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchoProps)(RouteValidator);
