import React from 'react';
import { Button, Link, Box, Grid, makeStyles } from '@material-ui/core';


import { StatsComponent, SummaryComponent } from '../common';
import oracle from '../assets/svg/oracle.svg';

import { Navbar, Footer, PopUpComponent } from '../common'


const recruiterData = {
    applied: {
        title: 'Jobs Posted', 
        value: 36
    }, 
    saved: {
        title: 'Hired', 
        value: 14
    }, 
    viewed: {
        title: 'In Progress', 
        value: 22
    },
    invitations: {
        title: 'Scheduled', 
        value: 5
    }
}

    

const jobPostData = {
    type: 'companyDetails', 
    companyLogo: oracle,
    companyName: 'oracle', 
    jobTitle: 'Frontend Developer', 
    jobLocation: 'Bangalore', 
    datePosted: '7/12/2021', 
    jobSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

}



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
    },
    button: {
        background: "#79d4fd",
        '&:hover': {
            background: "#69d4fd"
        }
    }, 
    filterMenu: {
        display: 'flex', 
        flexDirection: 'row', 
    },
     
    
    
}));


const RecruiterDashboard = () => {
    const classes = useStyles();
    

    return(
        <div className={classes.root}>
            <Navbar>
                <Link underline='none' href={"postedjobs"}>POSTED JOBS</Link>
                <Link underline='none' href={"profile"}>PROFILE</Link>
                <Link underline='none' href={"/"}>SIGNOUT</Link>
            </Navbar>
            <Box mt={8}>
                <StatsComponent data={recruiterData} />
                
                <Grid container spacing={2} justifyContent='center'>        
                    <Grid item xs={12} sm={6} md={9}>
                        <Button className={classes.button}>Create New Job Post</Button>
                        <SummaryComponent data={jobPostData}/>
                        <SummaryComponent data={jobPostData}/>
                        <SummaryComponent data={jobPostData}/>
                        <SummaryComponent data={jobPostData}/>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
        )
}

export default RecruiterDashboard