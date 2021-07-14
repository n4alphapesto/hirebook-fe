import React from 'react';
import { Card, CardContent, Typography, Grid, makeStyles } from '@material-ui/core';
import Image from './Image'
import {Button} from './Button'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
    }
}));

const SummaryComponent = ({data}) => {
    const classes = useStyles()
    const {companyLogo, companyName, jobTitle, jobLocation, jobSummary} = data
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item md={2}>
                        <Image src={companyLogo} width={100} height={100} />
                    </Grid>
                    <Grid item md={8}>
                        <Typography variant="h5">{`${companyName} - ${jobTitle}`}</Typography>
                        <Typography variant="h6">{`Job available in ${jobLocation}`}</Typography>
                        <Typography>{jobSummary}</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Button>View</Button>
                        <Typography>Not Interested</Typography>
                    </Grid>
                </Grid>
                
            </CardContent>
        </Card>
    )

}

export default SummaryComponent