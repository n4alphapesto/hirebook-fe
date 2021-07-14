import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Navbar, Footer, RouteValidator } from './common'
import { LandingPage } from './containers';



const Routes = () => {
    return (
        <div className="app-container">
            <Router>
                <Navbar />
                <Switch>
                    <RouteValidator exact path="/" component={LandingPage} />
                    {/* <RouteValidator path="/JobSeeker/Onboarding/:step" component={LandingPage} />
                    <RouteValidator path="/JobSeeker/Onboarding/:step" component={LandingPage} /> */}
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default Routes;