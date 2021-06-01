import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Resort extends Component {

  // createPatronBookingCards = () => (
  //   this.props.patrons.map(patron => {
  //     <div className="patron-booking">
  //       <h3>{patron.patron_name}</h3>
  //       <button>Edit booking</button>
  //     </div>
  //   })
  // )

  render(){

    return(
      <div >
        <h1>RESORT VIEW PAGE</h1>

        <div>
          <h2>Current Bookings:</h2>
            <div id="resort-current-bookings">
            {this.props.patrons.map(patron => <p>{patron.patron_name}</p>)}
            {/* {this.createPatronBookingCards()} */}
            </div>

          <h2>Resort Excursions:</h2>
            <div id="resort-excursions">
              {this.props.excursions.map(excursion => <p>{excursion.excursion_name}</p>)}
            </div>
            
        </div>

      </div>
    )
  }
}

export default Resort
