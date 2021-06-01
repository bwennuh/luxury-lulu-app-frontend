import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import Patron from './Patron.js'
import Resort from './Resort.js'

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