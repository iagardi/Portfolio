import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects'
import About from './components/About/About';


import './App.scss';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>

          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
