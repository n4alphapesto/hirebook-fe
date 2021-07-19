import React from "react";
import { useLocation } from "react-router-dom";

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
  Typography,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

import PopUpComponent from "./PopUpComponent";

import logo from "../assets/svg/logo.svg";
import Image from "./Image";

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

  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);


  const navChildrenLanding = [];
  navChildrenLanding[0] = (
    <Link underline="none" onClick={handleOpenLogin}>
      LOGIN
    </Link>
  );
  navChildrenLanding[1] = (
    <Link underline="none" onClick={handleOpenSignup}>
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
    <Link href="/signout" underline="none">
      LOG OUT
    </Link>
  );
  navChildrenJobseeker[2] = (
    <Link href="/signout" underline="none">
      LOG OUT
    </Link>
  );

  const location = useLocation();
  console.log(location);
  let navChildren;
  console.log(location.pathname);
  if (location.pathname.startsWith("/recruiter")) {
    navChildren = navChildrenRecruiter;
  } else if (location.pathname.startsWith("/jobseeker")) {
    navChildren = navChildrenJobseeker;
  } else if (location.pathname.startsWith("/signout")) {
    navChildren = navChildrenLanding;
  } else {
    navChildren = navChildrenLanding;
  }

  const handlePopUpOpen = () => {
    setOpenPopUp(true);
  };

  const handlePopUpClose = () => {
    setOpenPopUp(false);
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.content}>
        <Link
          href={`/${location.pathname.split("/")[1]}`}
          className={classes.logo}
        >
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
            aria-label="open menu"
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

        <PopUpComponent open={openLogin} handleClose={handleCloseLogin}>
          <Typography>login component</Typography>
        </PopUpComponent>
        <PopUpComponent open={openSignup} handleClose={handleCloseSignup}>
          <Typography>signup component</Typography>
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

export default Navbar;
