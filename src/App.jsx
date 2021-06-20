import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header'
import axios from "axios";
import Routes from './routes'
// import List from './components/List'
import Sidebar from './components/Sidebar'
import Create from './pages/Create'

function App() {
  return (

    <Router>
      <Route>
        <Header />
        <Sidebar />
        <Routes />
      </Route>
    </Router>
  );
}

export default App;
