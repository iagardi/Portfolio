import React from 'react'
import { Switch, Route } from "react-router-dom"

import Projects from '../Projects/Projects'
import About from '../About/About'
import Home from '../Home/Home'

import './Routes.scss'

const Routes = () => {
   return (
      <div className="routes">
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
   )
}

export default Routes
