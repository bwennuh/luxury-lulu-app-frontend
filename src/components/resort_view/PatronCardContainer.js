import React, { Component } from 'react';
import { PatronCard } from './PatronCard.js';

class PatronCardContainer extends Component {



  render() {

    // console.log(this.props.bookings)

    return (
      <div >
        <div className="patron-card-container">

          {this.props.patrons.map(patron => {

            let patronBookings = this.props.bookings.filter(booking => booking.patron_id == patron.id)

            return (
              <PatronCard
                key={patron.id}
                patron={patron}
                bookings={patronBookings}
              />
            )
          })}

          {/* {this.props.patrons.map(patron => {
            return (
            <PatronCard 
            key={patron.id} 
            patron={patron} 
            bookings={this.props.bookings}
            />
    )
})} */}
        </div>
      </div>
    )
  }
}

export default PatronCardContainer

