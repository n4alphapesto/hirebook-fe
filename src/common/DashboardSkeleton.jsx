import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import {Grid} from "@material-ui/core";


const DashboardSkeleton = () => {
    const statsCardWidth = 200;
    const statsCardHeight = 200;
    return (
      <div>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Skeleton
              variant="width"
              width={statsCardWidth}
              height={statsCardHeight}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Skeleton
              variant="width"
              width={statsCardWidth}
              height={statsCardHeight}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Skeleton
              variant="width"
              width={statsCardWidth}
              height={statsCardHeight}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Skeleton
              variant="width"
              width={statsCardWidth}
              height={statsCardHeight}
            />
          </Grid>
        </Grid>
  
        <Skeleton variant="rect" width={4000} height={300} />
      </div>
    );
};


export default DashboardSkeleton;
