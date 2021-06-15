import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header'
import axios from "axios";
import Routes from './routes'

function App() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/posts')
  //     .then(res => { setPosts(res.data) })
  //     .catch(err => console.log(err))

  // }, [])
  // console.log(posts);
  return (
    <Router>
      <Header />
      <Routes />
    </Router>

  );
}

export default App;
