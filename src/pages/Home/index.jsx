import React from 'react';
import './home.scss'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Home = () => {

    return (
        <>
            <Link
                to="/register"
            >Register</Link>
            <h1>this is home</h1>
        </>
    )
}
export default Home;