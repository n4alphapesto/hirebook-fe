import React from "react";

import styled from "styled-components";
import { Typography, Box, makeStyles, Grid } from "@material-ui/core";

import valuesIcon from "../../assets/images/value.png";
import visionIcon from "../../assets/images/vision.png";
import missionIcon from "../../assets/images/mission.png";

import './styles.css';

const Mission = () => {
    const classes = useStyles();

    return (
        <Box mt={10}>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={12} md={6} >
                    <Typography variant="h4" align="center" className={classes.boldText}>
                        Our Goal, Vision, Mision
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6} >
                    <Typography variant="body2" align="center" >
                        The rules we are following to develop the largest recruiting network.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" className={classes.root} spacing={8} mb={10}>
                <Grid item xs={12} sm={6} md={4} className={classes.paper}>
                    <Image alt={"mission image"} src={missionIcon} />
                    <Typography variant="h5" className={classes.boldText} gutterBottom>
                        Mission
                    </Typography>

                    <Box component="span" display="block" className={classes.span_text}>
                        Unleash the potential of talent and be a bridge to a better world.
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.paper}>
                    <Image alt={"vision image"} src={visionIcon} />
                    <Typography variant="h5" className={classes.boldText} gutterBottom>
                        Vision
                    </Typography>

                    <Box component="span" display="block" className={classes.span_text}>
                        To enable the discovery of opportunities by providing consistently superior recruitment solutions.
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.paper}>
                    <Image alt={"values image"} src={valuesIcon} />
                    <Typography variant="h5" className={classes.boldText} gutterBottom>
                        Values
                    </Typography>

                    <Box component="span" display="block" className={classes.span_text}>
                        To provide integrity, accountability, and enthusiasm in the recruitment process of ace talent.
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Mission;


const useStyles = makeStyles((theme) => ({
    boldText: {
        fontWeight: "bold",
    },
    root: {
        flexGrow: 1,
        marginTop: 12
    },
    paper: {
        width: 170,
        textAlign: "center",
        justifyContent: "center",
    },
    control: {
        padding: theme.spacing(2),
    },
    listitem: {
        fontSize: 13,
        paddingTop: 5,
        textAlign: "center",

    },
    span_text: {
        fontSize: 12
    },
    large: {
        width: '100%',
        height: theme.spacing(15),
    },

}));

const Image = styled.img`
    height: 100px;
    width: auto;
    align-self: center;
`
