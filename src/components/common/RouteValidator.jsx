import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import { validateRoute } from "../../utils/helpers";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    paddingTop: 80,
  },
}));

const RouteValidator = ({ component: Component, userDetails, ...rest }) => {
  const classes = useStyles();
  const redirectUrl = validateRoute(userDetails, rest.location.pathname);
  return (<Route
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
  />)
};

const mapStateToProps = (state) => ({
  userDetails: state.user.userDetails,
});

export default connect(mapStateToProps)(RouteValidator);
