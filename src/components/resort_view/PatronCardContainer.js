import React, { Component } from 'react';
import { PatronCard } from './PatronCard.js';

class PatronCardContainer extends Component {

  render() {

    return (
      <div >

        <div className="patron-card-container">

          {/* {this.props.patrons.map(patron => <PatronCard key={patron.id} id={patron.id} patron={patron} />)} */}
          {this.props.patrons.map(patron => {

            let patronBookings = this.props.bookings.filter(booking => booking.patron_id == patron.id)

            return (
              <PatronCard
                key={patron.id}
                id={patron.id}
                patron={patron}
                bookings={patronBookings}
              />
            )
          })}

        </div>

      </div>
    )
  }
}

export default PatronCardContainer

