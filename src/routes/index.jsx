import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home'
import Register from '../pages/Register'
import Header from '../components/Header'

const Routes = () => {
    return (
        <div className="Routes">
            <Route
                exact
                path="/"
                component={Home} />
            <Route
                path="/register"
                component={Register} />
        </div>
    )
}

export default Routes