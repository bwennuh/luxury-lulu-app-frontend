import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import Resort from './Patron.js'
import Patron from './Resort.js'

class Home extends Component {

  state = {
  }

  render(){
    return(
      <div>
          <Patron />

          <Resort />

      </div>
    )
  }
}

export default Home