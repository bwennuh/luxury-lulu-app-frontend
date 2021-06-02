import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import ResortCardContainer from './ResortCardContainer.js'

class Patron extends Component {

  render(){

    return(
      <div>

        <div id="patron-view">
          <h1>PATRON PAGE</h1>
        </div>

        <ResortCardContainer resorts={this.props.resorts} />

      </div>
    )
  }
}

export default Patron
