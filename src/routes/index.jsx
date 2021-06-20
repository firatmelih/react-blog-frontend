import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../pages/Home'
import Register from '../pages/Register'
import PostDetail from '../pages/PostDetail';
import Header from '../components/Header'
import Create from '../pages/Create'

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
            <Route
                path="/post/:id"
                component={PostDetail}
            />
            <Route
                path="/create/post"
                component={Create} />
        </div>
    )
}

export default Routes