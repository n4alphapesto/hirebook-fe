import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Navbar, Footer, RouteValidator } from './common'
import { LandingPage, JobSeekerOnboarding, RecruiterOnboarding, JobseekerDashboard, RecruiterDashboard } from './containers';


const Routes = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Router>
                <Switch>
                    <RouteValidator exact path="/" component={LandingPage} />
                    <RouteValidator exact path="/jobseeker/onboarding" component={JobSeekerOnboarding} />
                    <RouteValidator exact path="/recruiter/onboarding" component={RecruiterOnboarding} />
                    <RouteValidator path="/jobseeker" component={JobseekerDashboard} />
                    <RouteValidator path="/recruiter" component={RecruiterDashboard} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default Routes;