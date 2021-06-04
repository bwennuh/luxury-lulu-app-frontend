import React, { Component } from 'react';

import { ResortCard } from './ResortCard.js'

class ResortCardContainer extends Component {

  state = {
    booked: false
  }

  deleteRes = (singleResort) => {
    let deletedBooking = this.props.bookings.filter(booking => booking.resort_id !== singleResort.id)

    alert("Your reservation has been cancelled. Please log in again to see your changes.")


    // deletedBooking[0].resort_id = 0
    deletedBooking[0].patron_id = 0

    console.log(deletedBooking)

    this.props.checkResorts()
    // this.props.deleteRes()

  }

  render(){

    return(
      <div >

        <div className="booked-resorts-card-container">
          <h1>Upcoming reservations:</h1>
          {/* {this.props.bookedResorts.map(resort => <ResortCard deleteRes={this.props.deleteRes} key={resort.id} id={resort.id} resort={resort} booked={!this.state.booked} patronId={this.props.patronId} bookings={this.props.bookings} />)} */}

          {this.props.bookedResorts.map(resort => <ResortCard deleteRes={this.deleteRes} key={resort.id} id={resort.id} resort={resort} booked={!this.state.booked} patronId={this.props.patronId} bookings={this.props.bookings} />)}

        </div>

        <div className="available-resorts-card-container">
          <h1>Book a resort:</h1>
          {this.props.resorts.map(resort => <ResortCard key={resort.id} id={resort.id} resort={resort} booked={this.state.booked} />)}
        </div>

      </div>
    )
  }
}

export default ResortCardContainer