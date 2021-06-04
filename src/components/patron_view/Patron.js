import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import ResortCardContainer from './ResortCardContainer.js'
import ExcursionCardContainer from '../universal/ExcursionCardContainer'

class Patron extends Component {

  checkResorts = () => {
    let updatedBookings = this.props.bookings.filter(booking => booking.patron_id !== 0)

    console.log(updatedBookings)

    return (updatedBookings)
  }

  render(){

    return(
      <div>

        <div id="patron-view">
          <h1>PATRON PAGE</h1>
        </div>

        {/* <ResortCardContainer patronId={this.props.patron.id} deleteRes={this.props.deleteRes} bookedResorts={this.props.bookedResorts} resorts={this.props.resorts} bookings={this.props.bookings} checkResorts={this.checkResorts} /> */}

        <ResortCardContainer patronId={this.props.patron.id} deleteRes={this.props.deleteRes} bookedResorts={this.props.bookedResorts} resorts={this.props.resorts} bookings={this.checkResorts()} checkResorts={this.checkResorts} />

        <ExcursionCardContainer excursions={this.props.excursions} bookings={this.props.bookings} allBookings={this.props.allBookings}/>

      </div>
    )
  }
}

export default Patron
