import React from 'react'
import {Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

const StatsComponent = ({data}) => {
    const classes = useStyles();
    const {applied, saved, viewed, invitations} = data
    return (
        <Grid container spacing={2} justifyContent='center' className={classes.root}>

            {
                [applied, saved, viewed, invitations].map((item, i) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <Card >
                                <CardContent>
                                    <Typography variant="h2" align="center">{item.value}</Typography>
                                    <Typography variant="h4" align="center">{item.title}</Typography>
                                </CardContent>
                            </Card> 
                        </Grid>
                    )

                })
            }
                     
        </Grid>
                                          

    )
}

export default StatsComponent