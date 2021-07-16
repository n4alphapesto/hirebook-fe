import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#79d4fd",
    "&:hover": {
      background: "#69d4fd",
    },
  },
}));

const MaterialUIButton = ({ children, ...restOfProps }) => {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.root} {...restOfProps}>
      {children}
    </Button>
  );
};

MaterialUIButton.defaultProps = {
  buttonText: "Click Me",
};

MaterialUIButton.propTypes = {
  buttonText: PropTypes.string,
};

export { MaterialUIButton as Button };
