import React from "react";

import { useLocation } from "react-router";
import PropTypes from "prop-types";

import {
  Hidden,
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton,
  Menu,
  MenuItem,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import { PopUpComponent } from ".";

import logo from "../../assets/svg/logo.svg";
import Image from "./Image";
import { setCookies } from '../../utils'

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#79d4fd",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    paddingLeft: theme.spacing(10),
  },
  navlinks: {
    paddingRight: theme.spacing(10),
    "& > *": {
      margin: "20px",
      padding: "20px 10px",
      "&:hover": {
        //backgroundColor: '#3590fd',
        color: "black",
        borderBottom: "2px solid red",
      },
    },
  },
  navlink: {
    margin: "20px",
    padding: "20px 10px",
    "&:hover": {
      //    backgroundColor: '#3590fd',
      color: "black",
      borderBottom: "2px solid red",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const [isLoginOpen, _setIsLoginOpen] = React.useState(false);
  const [isSignUpOpen, _setIsSignUpOpen] = React.useState(false);

  const openLogin = () => {
    _setIsLoginOpen(true);
  };

  const openSignUp = () => {
    _setIsSignUpOpen(true);
  };

  const closeLogin = () => {
    _setIsLoginOpen(false);
  };

  const closeSignUp = () => {
    _setIsSignUpOpen(false);
  };

  const removeToken = () => { } //setCookies('ssoToken', '');

  const navChildrenLanding = [];
  navChildrenLanding[0] = (
    <Link underline="none" onClick={openLogin}>
      LOGIN
    </Link>
  );
  navChildrenLanding[1] = (
    <Link underline="none" onClick={openSignUp}>
      SIGNUP
    </Link>
  );

  const navChildrenRecruiter = ["POSTED JOBS", "PROFILE"].map((el, i) => (
    <Link
      key={i}
      underline="none"
      href={`/recruiter/${el.toLowerCase().split(" ").join("")}`}
    >
      {el}
    </Link>
  ));

  const navChildrenJobseeker = ["OPPORTUNITIES", "PROFILE"].map((el, i) => (
    <Link
      key={i}
      underline="none"
      href={`/jobseeker/${el.toLowerCase().split(" ").join("")}`}
    >
      {el}
    </Link>
  ));
  navChildrenRecruiter[2] = (
    <Link href="/" onClick={removeToken} underline="none">
      LOG OUT
    </Link>
  );
  navChildrenJobseeker[2] = (
    <Link href="/" onClick={removeToken} underline="none">
      LOG OUT
    </Link>
  );

  const location = useLocation();
  let navChildren;
  if (location.pathname.startsWith("/recruiter")) {
    navChildren = navChildrenRecruiter;
  } else if (location.pathname.startsWith("/jobseeker")) {
    navChildren = navChildrenJobseeker;
  } else if (location.pathname.startsWith("/signout")) {
    navChildren = navChildrenLanding;
  } else {
    navChildren = navChildrenLanding;
  }

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.content}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} width={164} />
        </Link>

        <Hidden mdDown>
          <Box className={classes.navlinks} aria-label={"navbar"}>
            {navChildren}
          </Box>
        </Hidden>

        <Hidden mdUp>
          <IconButton
            color="default"
            aria-label="open drawer....."
            edge="end"
            onClick={handleClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {navChildren.map((el, i) => (
              <MenuItem key={i} onClick={handleClose}>
                {el}
              </MenuItem>
            ))}
          </Menu>
        </Hidden>

        <PopUpComponent open={isLoginOpen} handleClose={closeLogin}>
          <Login handleClose={closeLogin} />
        </PopUpComponent>
        <PopUpComponent open={isSignUpOpen} handleClose={closeSignUp}>
          <Signup handleClose={closeSignUp} />
        </PopUpComponent>
      </Toolbar>
    </AppBar>
  );
};

Navbar.defaultProps = {
  navItems: ["login", "signup"],
};

Navbar.propTypes = {
  navItems: PropTypes.array,
};

export default React.memo(Navbar);
