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
        HOME PAGE
          <Patron patrons={this.props.patrons}/>

          <Resort resorts={this.props.resorts}/>

      </div>
    )
  }
}

export default Home