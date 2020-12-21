import React from 'react'

import {BrowserRouter as Router, Switch, Route, Link, NavLink, useParams} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'

import Homepage from './Homepage'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

const App = () => {
  return (
    <>

    <Router>
        <nav>
          <NavLink to="/homepage">Homepage</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      <main>
          <Route path="/homepage" component={Homepage}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
      </main>
    </Router>

    </>
  )
}

export default App
