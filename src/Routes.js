import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { RouteValidator } from "./common";
import {
  LandingPage,
  JobseekerDashboard,
  RecruiterDashboard,
  RecruiterJobPostForm,
  RecruiterProfile,
  RecruiterJobPostDetails,
  RecruiterViewJobSeekerDetails,
  RecruiterOnboarding,
  JobSeekerOnboarding,
} from "./containers";

import { Navbar, Footer } from "./common";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "2px solid red",
};

const Routes = () => {
  return (
    <div className="app-container">
      <Router style={styles}>
        <Navbar />
        <Switch>
          <RouteValidator exact path="/" component={LandingPage} />
          <RouteValidator path="/signout" component={LandingPage} />
          {/*jobseeker routes*/}

          <RouteValidator
            exact
            path="/jobseeker"
            component={JobseekerDashboard}
          />

          <RouteValidator
            exact
            path="/jobseeker/onboarding"
            component={JobSeekerOnboarding}
          />

          <RouteValidator
            exact
            path="/recruiter/onboarding"
            component={RecruiterOnboarding}
          />

          {/*recruiter routes*/}
          <RouteValidator
            exact
            path="/recruiter"
            component={RecruiterDashboard}
          />
          <RouteValidator
            exact
            path="/recruiter/postedjobs"
            component={RecruiterDashboard}
          />
          <RouteValidator
            exact
            path="/recruiter/postedjobs/:id"
            component={RecruiterJobPostDetails}
          />
          <RouteValidator
            path="/recruiter/candidates/:id"
            component={RecruiterViewJobSeekerDetails}
          />

          <RouteValidator
            path="/recruiter/profile"
            component={RecruiterProfile}
          />
          <RouteValidator
            path="/recruiter/createNewPost"
            component={RecruiterJobPostForm}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Routes;
