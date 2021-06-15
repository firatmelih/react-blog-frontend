import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home'
import Register from '../pages/Register'

const Routes = () => {
    return (
        <Router>
            <Route
                exact
                path="/"
            >
                <Home />
            </Route>
            <Route
                path="/register"
                component={Register} />
        </Router>
    )
}

export default Routes