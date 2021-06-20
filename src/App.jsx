import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header'
import axios from "axios";
import Routes from './routes'


function App() {
  return (
    <Router>
      <Route>
        <Header />
        <Routes />
      </Route>
    </Router>
  );
}

export default App;
