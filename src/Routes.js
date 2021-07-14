import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { RouteValidator } from './common'
import { JobseekerDashboard, RecruiterDashboard, LandingPage, LoginPage, SignupPage } from './containers';




const Routes = () => {
    return (
        <div className="app-container"> 
             <Router>
                <Switch>
                    <RouteValidator exact path="/" component={LandingPage} />
                    <RouteValidator path="/login" component={LoginPage} />
                    <RouteValidator path="/signup" component={SignupPage} />
                    <RouteValidator path="/jobseeker" component={JobseekerDashboard} />
                    <RouteValidator path="/recruiter" component={RecruiterDashboard} />
                </Switch> 
             </Router>
        </div>
    );
}

export default Routes;