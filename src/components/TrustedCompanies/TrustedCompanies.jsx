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
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "../../components/common/Image";

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
    padding: "0 10px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  logoImage: { marginLeft: 30, marginRight: 30 },
}));

function TrustedCompanies() {
  const classes = useStyles();

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
  const logoWidth = useMediaQuery(theme.breakpoints.down("sm")) ? 200 : 164;
  const logoHeight = 164;

  const items = companiesList.map((item, index) => {
    return (
      <Image
        src={item}
        key={index}
        alt={"logo"}
        className={classes.logoImage}
        width={logoWidth}
        height={logoHeight}
      />
    );
  });

  return (
    <Box className={classes.root}>
      <Typography variant="h4">Companies who trust us</Typography>
      <Box className={classes.mainContainer} justifyContent="center">
        <AliceCarousel
          autoPlay
          autoWidth
          autoPlayInterval={0}
          animationDuration={600}
          infinite
          disableDotsControls
          disableButtonsControls
          animationType="slide"
          mouseTracking
          items={items}
        />
      </Box>
    </Box>
  );
}

export default TrustedCompanies;
