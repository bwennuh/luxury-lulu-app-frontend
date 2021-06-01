import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import Home from './Home.js'
import Navbar from './Navbar.js'

class MainContainer extends Component {

  state = {
  }

  render(){
    return(
      <div>
          <Navbar />

          <Home />

      </div>
    )
  }
}

export default MainContainer