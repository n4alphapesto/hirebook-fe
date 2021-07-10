import React from 'react';
import { Container } from '@material-ui/core';
import { Route, Redirect } from 'react-router-dom';

const RouteValidator = ({ component: Component, ...rest }) => {
    // const redirectRoute = UTILS.ui.limitedAccessController(rest);
    // TODO: Write a logic to redirect user to different route if not allowed;
    const redirectRoute = null;

    return (
        <Route {...rest} render={matchProps => (
            redirectRoute ?
                <Redirect push to={redirectRoute} /> :
                <Container maxWidth="md">
                    <div className="content">
                        <Component {...matchProps} />
                    </div>
                </Container>
        )} />
    )
};


export default RouteValidator;