import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { RouteValidator, Navbar, Footer } from "./components/common";
import {
  LandingPage,
  JobseekerDashboard,
  JobPost,
  JobseekerProfile,
  RecruiterDashboard,
  RecruiterJobPostForm,
  RecruiterProfile,
  RecruiterJobPostDetails,
  JobDetail,
  RecruiterOnboarding,
  JobSeekerOnboarding,
  JobSeekerProfile,
} from "./containers";

const Routes = () => {
  return (
    <div className="app-container">
      <Router className="routes">
        <Navbar />
        <Switch>
          <RouteValidator
            exact
            path="/jobseeker"
            component={JobseekerDashboard}
          />
          <RouteValidator
            exact
            path="/jobseeker/profile"
            component={JobSeekerProfile}
          />
          <RouteValidator
            exact
            path="/jobseeker/editprofile"
            component={JobSeekerOnboarding}
          />
          <RouteValidator
            exact
            path="/jobseeker/opportunities/:id"
            component={JobPost}
          />
          <RouteValidator
            exact
            path="/jobseeker/profile"
            component={JobseekerProfile}
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
          <RouteValidator
            exact
            path="/recruiter"
            component={RecruiterDashboard}
          />
          <RouteValidator
            exact
            path="/recruiter/editprofile"
            component={RecruiterOnboarding}
          />
          <RouteValidator
            exact
            path="/recruiter/postedjobs"
            component={JobDetail}
          />
          <RouteValidator
            exact
            path="/recruiter/postedjobs/:id"
            component={JobDetail}
          />
          {/* <RouteValidator path="/recruiter/candidates/:id" component={RecruiterViewJobSeekerDetails} /> */}
          <RouteValidator
            path="/recruiter/profile"
            component={RecruiterProfile}
          />
          <RouteValidator
            path="/recruiter/createNewPost"
            component={RecruiterJobPostForm}
          />
          <RouteValidator exact path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default React.memo(Routes);
