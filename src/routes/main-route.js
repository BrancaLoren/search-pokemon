import React, { Suspense, lazy } from 'react'
import { Switch, Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

const Home = lazy(() => import('../pages/home/Home'));

const Routes = () => (

    <Router history={
        createBrowserHistory({
            basename: '',
            forceRefresh: false
        })}>
        <Switch>
            <Suspense fallback={<h1>Rendering...</h1>}>
                <Route component={() => <Home />} exact path="/" />
            </Suspense>
        </Switch>
    </Router>

);

export default Routes;