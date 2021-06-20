import React from 'react';
import './home.scss'
import Sidebar from '../../components/Sidebar'
import Posts from '../../components/Posts'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Home = () => {

    return (
        <div className="Home">
            <Sidebar />
            <Posts />
        </div>
    )
}
export default Home;