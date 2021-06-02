import React, { Component } from 'react';
import { PatronCard } from './PatronCard.js';

class PatronCardContainer extends Component {

  render(){
    return(
      <div >
        <div className="patron-card-container">

        {this.props.patrons.map(patron => {
    let patronBooking = this.props.bookings.select(booking => booking.patron_id == patron.id)
    return (
      <PatronCard 
          key={patron.id} 
          patron={patron}
          booking={patronBooking}
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

