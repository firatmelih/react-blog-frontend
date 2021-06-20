import { useEffect, useState } from "react";
import './home.scss'
import Sidebar from '../../components/Sidebar'
import Posts from '../../components/Posts'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import json from '../../test_api.json'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/posts')
    //         .then(res => setPosts(res.data))
    //         .catch(err => console.log(err));
    // }, [search]);


    useEffect(() => {
        setPosts(json);
    }, []);

    return (
        <div className="Home">
            <Sidebar />
            <Posts posts={posts} />
        </div>
    )
}
export default Home;