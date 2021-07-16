import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Navbar, Footer, RouteValidator } from './common'
import { LandingPage, JobSeekerOnboarding, RecruiterOnboarding } from './containers';


const Routes = () => {
    return (
        <div className="app-container">
            <Router>
                <Navbar />
                <Switch>
                    <RouteValidator exact path="/" component={LandingPage} />
                    <RouteValidator exact path="/jobseeker/onboarding" component={JobSeekerOnboarding} />
                    <RouteValidator exact path="/recruiter/onboarding" component={RecruiterOnboarding} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default Routes;