import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Routes from './components/Router/Routes';


import './App.scss';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
