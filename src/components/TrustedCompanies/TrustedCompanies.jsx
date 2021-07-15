import { React, useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Image from "../../common/Image";

import twilio from "../../assets/svg/twilio.svg";
import disney from "../../assets/svg/disney.svg";
import flipkart from "../../assets/svg/flipkart.svg";
import intel from "../../assets/svg/intel.svg";
import microsoft from "../../assets/svg/microsoft.svg";
import ola from "../../assets/svg/ola.svg";
import oracle from "../../assets/svg/oracle.svg";
import paypal from "../../assets/svg/paypal.svg";
import paytm from "../../assets/svg/paytm.svg";
import phonepe from "../../assets/svg/phonepe.svg";
import walmart from "../../assets/svg/walmart.svg";
import uber from "../../assets/svg/uber.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    overflow: "hidden",
    scrollBehavior: "smooth",
    width: "1185px",
  },
  logoImage: {
    //border: "2px solid red",
  },
  arrows: {
    //border: "2px solid red",
    height: "inherit",
  },
}));

function TrustedCompanies() {
  const classes = useStyles();
  const scrollRef = useRef(null);
  const [direction, setDirection] = useState("r");
  const [scrolled, setScrolled] = useState(0);

  const companiesList = [
    twilio,
    disney,
    flipkart,
    walmart,
    intel,
    microsoft,
    oracle,
    ola,
    uber,
    paytm,
    phonepe,
    paypal,
  ];

  const theme = useTheme();
  const logoWidth = useMediaQuery(theme.breakpoints.down("sm")) ? 82 : 164;
  const logoHeight = 164;

  useEffect(() => {
    const interval = setInterval(() => {
      //console.log(scrollRef.current.scrollLeft, scrolled, direction)
      if (direction === "r") {
        setScrolled((scrolled) => scrolled + logoWidth);
        scrollRef.current.scrollLeft += logoWidth;
      }
      if (direction === "l") {
        setScrolled((scrolled) => scrolled - logoWidth);
        scrollRef.current.scrollLeft -= logoWidth;
      }
      if (scrolled >= logoWidth * 12) {
        setDirection("l");
      }
      if (scrolled <= 0) {
        setDirection("r");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [scrolled, direction, logoWidth]);

  const executeScrollLeft = () => {
    //console.log(scrollRef.current.scrollLeft, direction)
    setScrolled((scrolled) => scrolled - logoWidth);
    scrollRef.current.scrollLeft -= logoWidth;
  };

  const executeScrollRight = () => {
    //console.log(myRef.current.scrollLeft, direction)
    setScrolled((scrolled) => scrolled + logoWidth);
    scrollRef.current.scrollLeft += logoWidth;
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h5">Companies who trust us</Typography>
      <Box className={classes.mainContainer} justifyContent="center">
        <ArrowBackIosIcon
          className={classes.arrows}
          onClick={executeScrollLeft}
        />
        <ImageList
          className={classes.imageList}
          cols={3.5}
          gap={4}
          ref={scrollRef}
        >
          {companiesList.map((item, i) => {
            return (
              <ImageListItem key={i} className={classes.logoImage}>
                <Image
                  src={item}
                  alt={"logo"}
                  width={logoWidth}
                  height={logoHeight}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
        <ArrowForwardIosIcon
          className={classes.arrows}
          onClick={executeScrollRight}
        />
      </Box>
    </Box>
  );
}

export default TrustedCompanies;
