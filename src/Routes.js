import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { RouteValidator, Navbar, Footer } from "./components/common";
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

const Routes = () => {
  return (
    <div className="app-container">
      <Router className="routes">
        <Navbar />
        <Switch>
          <RouteValidator exact path="/jobseeker" component={JobseekerDashboard} />
          <RouteValidator exact path="/jobseeker/onboarding" component={JobSeekerOnboarding} />
          <RouteValidator exact path="/recruiter/onboarding" component={RecruiterOnboarding} />
          <RouteValidator exact path="/recruiter" component={RecruiterDashboard} />
          <RouteValidator exact path="/recruiter/postedjobs" component={RecruiterDashboard} />
          <RouteValidator exact path="/recruiter/postedjobs/:id" component={RecruiterJobPostDetails} />
          <RouteValidator path="/recruiter/candidates/:id" component={RecruiterViewJobSeekerDetails} />
          <RouteValidator path="/recruiter/profile" component={RecruiterProfile} />
          <RouteValidator path="/recruiter/createNewPost" component={RecruiterJobPostForm} />
          <RouteValidator path="/signout" component={LandingPage} />
          <RouteValidator exact path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default React.memo(Routes);
