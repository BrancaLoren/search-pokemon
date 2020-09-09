import React, { Suspense, lazy } from 'react'
import { Switch, Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import LinearProgress from '@material-ui/core/LinearProgress';

const Home = lazy(() => import('../pages/home/home'));

const Routes = () => (

    <Router history={
        createBrowserHistory({
            basename: '',
            forceRefresh: false
        })}>
        <Switch>
            <Suspense fallback={<LinearProgress />}>
                <Route component={() => <Home />} exact path="/" />
            </Suspense>
        </Switch>
    </Router>

);

export default Routes;