import React from 'react';
import {Hidden, Link, Box, Grid, makeStyles, Typography } from '@material-ui/core';

import FilterListIcon from '@material-ui/icons/FilterList';

import { Navbar, Footer, PopUpComponent, StatsComponent, FilterComponent, SummaryComponent } from '../common';
import oracle from '../assets/svg/oracle.svg';



const candidateData = {
    applied: {
        title: 'Applied Jobs', 
        value: 6
    }, 
    saved: {
        title: 'Saved Jobs', 
        value: 6
    }, 
    viewed: {
        title: 'Viewed Resume', 
        value: 22
    },
    invitations: {
        title: 'Invitations', 
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
    filterMenu: {
        display: 'flex', 
        flexDirection: 'row', 
    },
    filters: {

    } 
    
    
}));


const JobseekerDashboard = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <Navbar>
                <Link underline='none' href={"opportunities"}>OPPORTUNITIES</Link>
                <Link underline='none' href={"profile"}>PROFILE</Link>
                <Link underline='none' href={"/"}>SIGNOUT</Link>
            </Navbar>
            <Box mt={8}>
                <Hidden mdUp>
                    <Grid container justifyContent="center">
                        <Grid item><FilterListIcon /></Grid>
                        <Grid item><Typography>Filter</Typography></Grid>
                    </Grid>
                </Hidden>
                <StatsComponent data={candidateData} />

                <Grid container spacing={2} justifyContent='center'>
                    <Hidden mdDown>
                        <Grid item className={classes.filters}>
                            <FilterComponent title={"Filter By status"} options={["interested", "not interested"]}/>
                            <FilterComponent title={"Filter By location"} options={["All", "bangalore", "mumbai", "pune"]}/>
                            <FilterComponent title={"Filter By company size"} options={["All", "small", "medium", "large"]} />
                        </Grid>
                    </Hidden>
                    
                    
                    <Grid item xs={12} sm={6} md={9}>
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

export default JobseekerDashboard